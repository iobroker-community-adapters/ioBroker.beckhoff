const request = require('./adsRequest');
const { descriptors, identity } = require('./symbolCache');

/** Manages one adapter's ADS sessions and in-memory metadata cache. */
class Connection {
    /**
     * @param {Record<string, any>} adapter Adapter instance.
     * @param {Record<string, any>} ads ADS implementation.
     * @param {Record<string, any>} lib Adapter workers.
     */
    constructor(adapter, ads, lib) {
        this.adapter = adapter;
        this.ads = ads;
        this.lib = lib;
        this.session = null;
        this.cache = null;
        this.stopped = false;
        this.reconnectTimer = null;
        this.pollTimer = null;
        this.disconnectedAt = null;
    }

    /** @returns {Promise<void>} Startup completion. */
    async start() {
        const { config } = this.adapter;
        // Materialize saved ports as strings; jsonConfig can receive numeric defaults.
        config.targetAmsPort = String(config.targetAmsPort);
        const timeout = Number(config.adsTimeout ?? 500);
        config.adsTimeout = Number.isInteger(timeout) && timeout >= 100 && timeout <= 60000 ? timeout : 500;
        config.reconnectInterval = Math.max(5, Number(config.reconnectInterval) || 15);
        config.symbolCacheMaxAge = Math.max(0, Number(config.symbolCacheMaxAge ?? 300) || 0);
        config.symbolObjectList = [];
        await this.adapter.setStateAsync('info.connection', false, true);
        await this.adapter.setStateAsync('info.plcRun', false, true);
        if (
            !config.targetIpAdress ||
            config.targetIpAdress === 'xxx.xxx.xxx.xxx' ||
            !config.targetAmsNetId ||
            config.targetAmsNetId === 'xxx.xxx.xxx.xxx.xxx.xxx'
        ) {
            this.adapter.log.warn('Configure the PLC target address and AMS-Net-ID before connecting.');
            return;
        }
        if (config.targetAmsPort === '901' && config.tpyFile) {
            const file = await this.adapter.readFileAsync(`${this.adapter.namespace}.tpy`, config.tpyFile);
            config.xmlTpyData = file.file.toString('utf8');
        }
        await this.adapter.subscribeStatesAsync('plc.*');
        this.connect();
    }

    /** Open a new ADS session. */
    connect() {
        if (this.stopped || this.session) {
            return;
        }
        const { config } = this.adapter;
        let session;
        const client = this.ads.connect(
            {
                host: config.targetIpAdress,
                amsNetIdTarget: config.targetAmsNetId,
                amsPortTarget: config.targetAmsPort === '901' ? '801' : config.targetAmsPort,
                port: config.targetTcpPort,
                amsNetIdSource: config.sourceAmsNetId,
                amsPortSource: config.sourceAmsPort,
                timeout: config.adsTimeout,
            },
            () => this.connected(session).catch(error => this.fail(session, error)),
        );
        session = {
            adapter: this.adapter,
            client,
            ready: false,
            acceptValues: false,
            plcRun: false,
            connectTimer: null,
            syncPromise: null,
            needsFullSync: false,
            symbolVersion: null,
            resyncValue: this.cache?.resyncValue ?? null,
            isCurrent: () => !this.stopped && this.session === session,
            metadataChanged: () => {
                if (session.isCurrent() && session.plcRun) {
                    session.ready = false;
                    session.acceptValues = false;
                    this.cache = null;
                    this.sync(session, true).catch(error => this.fail(session, error));
                }
            },
        };
        this.session = session;
        client.on('error', error => this.fail(session, error));
        client.on('timeout', error => this.fail(session, error || new Error('ADS timeout')));
        client.on('notification', handle => {
            this.lib.workerPlcToAdapter(session, handle).catch(error => this.fail(session, error));
        });
        session.connectTimer = this.adapter.setTimeout(
            () => this.fail(session, new Error('ADS connection timed out')),
            Math.max(config.adsTimeout + 500, 5000),
        );
    }

    /**
     * @param {Record<string, any>} session Active session.
     * @returns {Promise<void>} Connection initialization.
     */
    async connected(session) {
        if (!session.isCurrent()) {
            return;
        }
        this.adapter.clearTimeout(session.connectTimer);
        await this.checkState(session);
        this.schedulePoll(session);
    }

    /**
     * @param {Record<string, any>} session Active session.
     * @returns {Promise<number|null>} Symbol version, or null for TPY mode.
     */
    async version(session) {
        if (!session.isCurrent()) {
            throw new Error('Connection changed');
        }
        if (this.adapter.config.targetAmsPort === '901') {
            return null;
        }
        const handle = await request(session, 'read', {
            indexGroup: this.ads.ADSIGRP.SYM_VERSION,
            indexOffset: 0,
            bytelength: this.ads.BYTE,
        });
        if (!Number.isInteger(handle.value) || handle.value < 0 || handle.value > 255) {
            throw new Error('Invalid symbol version');
        }
        return handle.value;
    }

    /**
     * Serialize metadata synchronization and coalesce additional change notifications.
     *
     * @param {Record<string, any>} session Active session.
     * @param {boolean} force Whether metadata must be reloaded.
     * @returns {Promise<void>} Synchronization completion.
     */
    sync(session, force = false) {
        if (session.syncPromise) {
            session.needsFullSync ||= force;
            return session.syncPromise;
        }
        session.syncPromise = this.synchronize(session, force).finally(() => {
            session.syncPromise = null;
        });
        return session.syncPromise;
    }

    /**
     * @param {Record<string, any>} session Active session.
     * @param {boolean} force Force a full reload.
     * @returns {Promise<void>} Synchronization completion.
     */
    async synchronize(session, force) {
        session.ready = false;
        session.acceptValues = false;
        for (let attempt = 0; attempt < 3; attempt++) {
            session.needsFullSync = false;
            const version = await this.version(session);
            const key = identity(this.adapter.config);
            const outage = this.disconnectedAt === null ? Infinity : Date.now() - this.disconnectedAt;
            const reuse =
                !force &&
                this.adapter.config.cacheSymbolTable !== false &&
                this.cache &&
                this.cache.key === key &&
                this.cache.version === version &&
                outage <= this.adapter.config.symbolCacheMaxAge * 1000;
            let symbols;
            if (reuse) {
                symbols = this.cache.symbols;
                this.adapter.log.info('Symbol version unchanged; reuse metadata and renew ADS handles.');
            } else {
                this.cache = null;
                this.adapter.log.info('Synchronize PLC symbol metadata.');
                symbols =
                    this.adapter.config.targetAmsPort === '901'
                        ? await this.lib.tpyParser(this.adapter)
                        : await this.lib.plcVarSyncronizing(session);
            }
            if (version !== (await this.version(session))) {
                this.cache = null;
                force = true;
                continue;
            }
            const metadata = descriptors(symbols);
            this.adapter.config.symbolObjectList = descriptors(metadata);
            session.symbolVersion = version;
            try {
                await this.lib.createObjectsAndHandles(session, !reuse);
                if (version !== (await this.version(session)) || session.needsFullSync) {
                    this.cache = null;
                    force = true;
                    continue;
                }
                session.acceptValues = true;
                await this.refresh(session);
            } catch (error) {
                session.acceptValues = false;
                if (!session.isCurrent()) {
                    throw error;
                }
                this.cache = null;
                if (reuse) {
                    this.adapter.log.warn(`Cached symbols failed (${error.message}); reload metadata.`);
                    force = true;
                    continue;
                }
                throw error;
            }
            if (session.needsFullSync || version !== (await this.version(session))) {
                session.acceptValues = false;
                this.cache = null;
                force = true;
                continue;
            }
            await this.adapter.setStateAsync('info.connection', true, true);
            // Notifications can invalidate metadata while the state write is pending.
            // Commit readiness only after every await has finished and no resync is pending.
            const finalVersion = await this.version(session);
            if (session.needsFullSync || version !== finalVersion) {
                session.acceptValues = false;
                this.cache = null;
                force = true;
                continue;
            }
            this.cache = { key, version, symbols: metadata, resyncValue: session.resyncValue };
            session.ready = true;
            this.disconnectedAt = null;
            return;
        }
        throw new Error('Symbol table changed repeatedly during synchronization');
    }

    /**
     * Refresh values without downloading symbol metadata or issuing PLC writes.
     *
     * @param {Record<string, any>} session Active session.
     * @returns {Promise<void>} Value refresh completion.
     */
    async refresh(session) {
        const symbols = this.adapter.config.symbolObjectList;
        for (const item of symbols) {
            if (!session.isCurrent() || symbols !== this.adapter.config.symbolObjectList) {
                return;
            }
            let handle;
            try {
                handle = await request(session, 'read', item);
            } catch (error) {
                if (!session.isCurrent() || symbols !== this.adapter.config.symbolObjectList) {
                    return;
                }
                throw error;
            }
            if (symbols !== this.adapter.config.symbolObjectList) {
                return;
            }
            await this.lib.workerPlcToAdapter(session, handle);
        }
    }

    /**
     * @param {Record<string, any>} session Active session.
     * @returns {Promise<void>} PLC status check.
     */
    async checkState(session) {
        const state = await request(session, 'readState');
        const running = state.adsState === this.ads.ADSSTATE.RUN;
        await this.adapter.setStateAsync('info.plcRun', running, true);
        const previouslyRunning = session.plcRun;
        session.plcRun = running;
        if (!running) {
            this.cache = null;
            session.ready = false;
            session.acceptValues = false;
            await this.adapter.setStateAsync('info.connection', true, true);
        } else if (!previouslyRunning) {
            await this.sync(session);
        } else if (session.ready) {
            const deadline = Date.now() - this.adapter.config.reconnectInterval * 1000;
            if (
                this.adapter.config.symbolObjectList.some(
                    item => item.lastWriteTime > 0 && item.lastWriteTime < deadline,
                )
            ) {
                await this.refresh(session);
            }
        }
        session.plcRun = running;
    }

    /** @param {Record<string, any>} session Active session. */
    schedulePoll(session) {
        if (!session.isCurrent()) {
            return;
        }
        this.pollTimer = this.adapter.setTimeout(async () => {
            try {
                await this.checkState(session);
                this.schedulePoll(session);
            } catch (error) {
                this.fail(session, error);
            }
        }, this.adapter.config.reconnectInterval * 1000);
    }

    /**
     * @param {Record<string, any>} session Failed session.
     * @param {Error} error Failure reason.
     */
    fail(session, error) {
        if (!session?.isCurrent()) {
            return;
        }
        this.adapter.log.warn(`ADS connection lost: ${error.message || error}`);
        this.session = null;
        this.disconnectedAt ??= Date.now();
        this.adapter.clearTimeout(session.connectTimer);
        this.adapter.clearTimeout(this.pollTimer);
        this.adapter.setState('info.connection', false, true);
        this.adapter.setState('info.plcRun', false, true);
        // Capture the old client: its delayed end callback must never clear a new session.
        session.client.end(() => this.adapter.log.debug('Previous ADS connection closed.'));
        this.reconnectTimer = this.adapter.setTimeout(
            () => this.connect(),
            this.adapter.config.reconnectInterval * 1000,
        );
    }

    /**
     * @param {string} id State ID.
     * @param {Record<string, any>|null} state New state.
     */
    stateChange(id, state) {
        const session = this.session;
        if (state && !state.ack && session?.ready && session.isCurrent()) {
            this.lib.workerAdapterToPlc(session, state, id).catch(error => this.fail(session, error));
        }
    }

    /** @returns {Promise<void>} Requests closure without delaying adapter unload. */
    async stop() {
        this.stopped = true;
        this.adapter.clearTimeout(this.reconnectTimer);
        this.adapter.clearTimeout(this.pollTimer);
        const session = this.session;
        this.session = null;
        if (session) {
            this.adapter.clearTimeout(session.connectTimer);
            // Managed timers cannot be created once ioBroker has begun unloading.
            session.client.end(() => this.adapter.log.debug('ADS connection closed during unload.'));
        }
        this.adapter.setState('info.connection', false, true);
        this.adapter.setState('info.plcRun', false, true);
    }
}

module.exports = Connection;

const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const sinon = require('sinon');
const ads = require('node-ads-api');
const Connection = require('../lib/connection');
const lib = require('../lib');
const { descriptors } = require('../lib/symbolCache');
const jsonConfig = require('../admin/jsonConfig.json');

function fixture(config = {}) {
    const states = new Map();
    const objects = new Map();
    const adapter = {
        namespace: 'beckhoff.0',
        config: {
            targetIpAdress: 'plc.local', targetAmsNetId: '1.2.3.4.1.1', targetAmsPort: '851',
            targetTcpPort: 48898, sourceAmsNetId: '6.7.8.9.1.1', sourceAmsPort: 32905,
            targetVTable: 'GVL', reconnectInterval: 5, adsTimeout: 500, cacheSymbolTable: true,
            symbolCacheMaxAge: 300, xmlTpyData: '', ...config,
        },
        log: { debug() {}, info() {}, warn() {}, error() {} },
        setTimeout, clearTimeout,
        subscribeStatesAsync: async () => {},
        setState: (id, val, ack) => states.set(id, { val, ack }),
        setStateAsync: async (id, val, ack) => states.set(id, { val, ack }),
        getStatesOfAsync: async () => [...objects.values()].filter(object => object.type === 'state'),
        delObjectAsync: async id => objects.delete(id),
        setObjectNotExistsAsync: async (id, object) => {
            if (!objects.has(id)) objects.set(id, { ...object, _id: `beckhoff.0.${id}` });
        },
        extendObjectAsync: async (id, patch) => {
            const object = objects.get(id);
            object.common = { ...object.common, ...patch.common };
            object.native = { ...object.native, ...patch.native };
        },
    };
    const clients = [];
    const counts = { symbols: 0, datatypes: 0, reads: 0, writes: 0, reconciles: 0 };
    let version = 1;
    let value = true;
    let symbolName = 'GVL.enabled';
    let plcState = ads.ADSSTATE.RUN;
    let rejectNextHandle = false;
    const fakeAds = {
        ...ads,
        connect(options, callback) {
            const client = new EventEmitter();
            client.options = options;
            client.readState = cb => cb(null, { adsState: plcState });
            client.getDatatyps = cb => { counts.datatypes++; cb(null, []); };
            client.getSymbols = cb => {
                counts.symbols++;
                cb(null, [{ name: symbolName, type: 'BOOL', size: 1 }]);
            };
            client.releaseNotificationHandles = cb => cb(null);
            client.notify = (handle, cb) => {
                if (rejectNextHandle && handle.symname) {
                    rejectNextHandle = false;
                    cb(new Error('Invalid symbol handle'));
                } else {
                    // Model node-ads-api's mutation and refusal to replace an existing handle.
                    if (handle.symname) {
                        if (handle.symhandle !== undefined) {
                            assert.equal(handle.symhandle, clients.length * 100);
                        }
                        handle.symhandle = clients.length * 100;
                        handle.notifyHandle = clients.length * 100 + 1;
                    }
                    cb(null);
                }
            };
            client.read = (handle, cb) => {
                if (handle.indexGroup === ads.ADSIGRP.SYM_VERSION) {
                    cb(null, { ...handle, value: version });
                } else {
                    counts.reads++;
                    handle.value = value;
                    cb(null, handle);
                }
            };
            client.write = (handle, cb) => { counts.writes++; value = handle.value; cb(null); };
            client.end = cb => { client.endCallback = cb; };
            clients.push(client);
            adapter.setTimeout(callback, 0);
            return client;
        },
    };
    const runtime = new Connection(adapter, fakeAds, {
        ...lib,
        createObjectsAndHandles: async (session, reconcile) => {
            if (reconcile) counts.reconciles++;
            return lib.createObjectsAndHandles(session, reconcile);
        },
    });
    return {
        runtime, adapter, clients, counts, states, objects,
        setVersion: next => { version = next; }, setValue: next => { value = next; },
        setSymbolName: next => { symbolName = next; },
        setPlcState: next => { plcState = next; }, rejectHandle: () => { rejectNextHandle = true; },
    };
}

describe('ADS reconnect and metadata synchronization', () => {
    let clock;
    let fixtures;
    async function start(f) {
        fixtures.push(f);
        await f.runtime.start();
        await clock.tickAsync(1);
        assert.equal(f.runtime.session.ready, true);
    }
    async function reconnect(f) {
        f.clients.at(-1).emit('timeout', new Error('Network outage'));
        await clock.tickAsync(5001);
        assert.equal(f.runtime.session.ready, true);
    }
    beforeEach(() => { clock = sinon.useFakeTimers(); fixtures = []; });
    afterEach(async () => {
        const stops = fixtures.map(f => f.runtime.stop());
        await clock.tickAsync(1501);
        await Promise.all(stops);
        clock.restore();
    });

    it('keeps metadata, renews handles and reads current values without touching objects', async () => {
        const f = fixture();
        await start(f);
        const first = f.adapter.config.symbolObjectList[0];
        const object = f.objects.get('plc.GVL.enabled');
        object.common.name = 'My mapped switch';
        f.setValue(false);
        await reconnect(f);
        const second = f.adapter.config.symbolObjectList[0];
        assert.notEqual(first, second);
        assert.equal(second.symhandle, 200);
        assert.equal(f.counts.symbols, 1);
        assert.equal(f.counts.datatypes, 1);
        assert.equal(f.counts.reconciles, 1);
        assert.equal(f.states.get('plc.GVL.enabled').val, false);
        assert.equal(object.common.name, 'My mapped switch');
        assert.equal(f.counts.writes, 0);
        assert.equal(f.runtime.cache.symbols[0].symhandle, undefined);
    });

    it('fully synchronizes after a changed symbol version', async () => {
        const f = fixture(); await start(f); f.setVersion(2); await reconnect(f);
        assert.equal(f.counts.symbols, 2);
        assert.equal(f.counts.reconciles, 2);
    });

    for (const notification of ['symbol version', 'resync counter']) {
    it(`resynchronizes a ${notification} notification during the final connection-state write`, async () => {
        const f = fixture(); await start(f);
        if (notification === 'resync counter') {
            f.setSymbolName('GVL.ioBrokerResync');
        }
        const session = f.runtime.session;
        const write = f.adapter.setStateAsync;
        let release;
        f.adapter.setStateAsync = async (id, val, ack) => {
            if (id === 'info.connection' && val && !release) {
                await new Promise(resolve => { release = resolve; });
            }
            return write(id, val, ack);
        };
        const sync = f.runtime.sync(session, true);
        await clock.tickAsync(1);
        assert.equal(typeof release, 'function');
        if (notification === 'symbol version') {
            f.setVersion(2);
            f.clients[0].emit('notification', { indexGroup: ads.ADSIGRP.SYM_VERSION, value: 2 });
        } else {
            f.setValue(false);
            const handle = f.adapter.config.symbolObjectList[0];
            handle.value = false;
            f.clients[0].emit('notification', handle);
        }
        await clock.tickAsync(1);
        release();
        await sync;
        assert.equal(session.ready, true);
        assert.equal(session.acceptValues, true);
        assert.equal(session.needsFullSync, false);
        assert.equal(f.runtime.cache.version, notification === 'symbol version' ? 2 : 1);
        assert.equal(f.counts.symbols, 3);
        assert.equal(f.counts.writes, 0);
    });
    }

    it('falls back to a full sync if cached subscriptions fail', async () => {
        const f = fixture(); await start(f); f.rejectHandle(); await reconnect(f);
        assert.equal(f.counts.symbols, 2);
    });

    it('reloads metadata when caching is disabled or the outage exceeds the limit', async () => {
        for (const config of [{ cacheSymbolTable: false }, { symbolCacheMaxAge: 1 }]) {
            const f = fixture(config); await start(f); await reconnect(f);
            assert.equal(f.counts.symbols, 2);
        }
    });

    it('invalidates metadata after an observed STOP/RUN transition', async () => {
        const f = fixture(); await start(f);
        f.setPlcState(ads.ADSSTATE.STOP);
        await clock.tickAsync(5000);
        assert.equal(f.runtime.session.ready, false);
        f.runtime.stateChange('beckhoff.0.plc.GVL.enabled', { val: false, ack: false });
        assert.equal(f.counts.writes, 0);
        f.setPlcState(ads.ADSSTATE.RUN);
        await clock.tickAsync(5000);
        assert.equal(f.counts.symbols, 2);
        assert.equal(f.runtime.session.ready, true);
    });

    it('refreshes a missing write acknowledgement without downloading metadata', async () => {
        const f = fixture(); await start(f);
        f.runtime.stateChange('beckhoff.0.plc.GVL.enabled', { val: false, ack: false });
        await clock.tickAsync(10001);
        assert.equal(f.counts.writes, 1);
        assert.equal(f.counts.symbols, 1);
        assert.equal(f.states.get('plc.GVL.enabled').val, false);
        assert.equal(f.adapter.config.symbolObjectList[0].lastWriteTime, 0);
    });

    it('ignores late close callbacks, notifications and errors from the old session', async () => {
        const f = fixture(); await start(f);
        const old = f.clients[0]; await reconnect(f);
        const active = f.runtime.session;
        old.endCallback();
        old.emit('error', new Error('Late failure'));
        old.emit('notification', { symname: 'GVL.enabled', value: false });
        await clock.tickAsync(1);
        assert.equal(f.runtime.session, active);
        assert.equal(f.states.get('plc.GVL.enabled').val, true);
        assert.equal(f.clients.length, 2);
    });

    it('keeps caches independent between compact-mode instances', async () => {
        const a = fixture(); const b = fixture(); await start(a); await start(b);
        a.setVersion(2); await reconnect(a);
        assert.equal(a.counts.symbols, 2);
        assert.equal(b.counts.symbols, 1);
        assert.equal(b.runtime.cache.version, 1);
    });

    it('forwards the configurable timeout and normalizes numeric runtime ports', async () => {
        const f = fixture({ adsTimeout: 2000, targetAmsPort: 851 }); await start(f);
        assert.equal(f.clients[0].options.timeout, 2000);
        assert.equal(f.adapter.config.targetAmsPort, '851');
    });

    it('resynchronizes on a symbol version notification', async () => {
        const f = fixture(); await start(f); f.setVersion(2);
        const oldHandle = f.adapter.config.symbolObjectList[0];
        f.clients[0].emit('notification', { indexGroup: ads.ADSIGRP.SYM_VERSION, value: 2 });
        await clock.tickAsync(1);
        assert.equal(f.counts.symbols, 2);
        assert.equal(f.runtime.session.ready, true);
        oldHandle.value = false;
        f.clients[0].emit('notification', oldHandle);
        await clock.tickAsync(1);
        assert.equal(f.states.get('plc.GVL.enabled').val, true);
    });

    it('cancels a stalled request and reconnects without consuming its late result', async () => {
        const f = fixture(); await start(f);
        let delayed;
        f.clients[0].readState = callback => { delayed = callback; };
        await clock.tickAsync(6001);
        assert.equal(f.runtime.session, null);
        delayed(null, { adsState: ads.ADSSTATE.RUN });
        await clock.tickAsync(5001);
        assert.equal(f.clients.length, 2);
        assert.equal(f.runtime.session.ready, true);
        assert.equal(f.counts.symbols, 1);
    });

    it('does not reconnect or acknowledge stale notifications after unload', async () => {
        const f = fixture(); await start(f);
        const old = f.clients[0]; await f.runtime.stop();
        old.emit('timeout', new Error('Late timeout'));
        old.emit('notification', { symname: 'GVL.enabled', value: false });
        await clock.tickAsync(20000);
        assert.equal(f.clients.length, 1);
        assert.equal(f.states.get('plc.GVL.enabled').val, true);
        assert.equal(f.runtime.session, null);
    });

    it('retries a download when the symbol version changes before registration', async () => {
        const f = fixture(); await start(f);
        const client = f.clients[0];
        const getSymbols = client.getSymbols;
        let changed = false;
        client.getSymbols = callback => getSymbols((error, result) => {
            if (!changed) { changed = true; f.setVersion(3); }
            callback(error, result);
        });
        f.setVersion(2);
        client.emit('notification', { indexGroup: ads.ADSIGRP.SYM_VERSION, value: 2 });
        await clock.tickAsync(1);
        assert.equal(f.runtime.cache.version, 3);
        assert.equal(f.counts.symbols, 3);
        assert.equal(f.counts.reconciles, 2);
        assert.equal(f.runtime.session.ready, true);
    });

    it('ignores a failed old value read after a metadata resync on the same socket', async () => {
        const f = fixture(); await start(f);
        const session = f.runtime.session;
        const old = f.adapter.config.symbolObjectList[0];
        const read = f.clients[0].read;
        let delayed;
        f.clients[0].read = (handle, callback) => {
            if (handle === old) delayed = callback;
            else read(handle, callback);
        };
        const refresh = f.runtime.refresh(session);
        f.setVersion(2);
        f.clients[0].emit('notification', { indexGroup: ads.ADSIGRP.SYM_VERSION, value: 2 });
        await clock.tickAsync(1);
        delayed(new Error('Released old handle'));
        await refresh;
        assert.equal(f.runtime.session, session);
        assert.equal(session.ready, true);
        assert.equal(f.counts.symbols, 2);
    });

    it('reloads metadata when the configured variable selection changes', async () => {
        const f = fixture(); await start(f);
        f.adapter.config.targetVTable = '';
        await reconnect(f);
        assert.equal(f.counts.symbols, 2);
    });

    it('reads a selected TPY file while retaining the legacy XML configuration key', async () => {
        const f = fixture({ targetAmsPort: 901, tpyFile: 'project.tpy', xmlTpyData: 'previous XML' });
        const xml = '<PlcProjectInfo><Symbols><Symbol><Name>.GVL.enabled</Name><Type>BOOL</Type></Symbol></Symbols><DataTypes><DataType><Name>Unused</Name></DataType></DataTypes></PlcProjectInfo>';
        f.adapter.readFileAsync = async (id, file) => {
            assert.equal(id, 'beckhoff.0.tpy'); assert.equal(file, 'project.tpy');
            return { file: Buffer.from(xml) };
        };
        await start(f); await reconnect(f);
        assert.equal(f.adapter.config.xmlTpyData, xml);
        assert.equal(f.counts.symbols, 0);
        assert.equal(f.counts.datatypes, 0);
        assert.equal(f.counts.reconciles, 1);
        assert.equal(f.objects.has('plc.GVL.enabled'), true);
    });
});

describe('Metadata and configuration compatibility', () => {
    it('does not resolve or connect to an unconfigured placeholder address', async () => {
        for (const targetIpAdress of ['', 'xxx.xxx.xxx.xxx']) {
            const f = fixture({ targetIpAdress });
            await f.runtime.start();
            assert.equal(f.clients.length, 0);
            await f.runtime.stop();
        }
    });
    it('discards all session-specific data from cached descriptors', () => {
        const [item] = descriptors([{ symname: 'GVL.x', bytelength: ads.BOOL, symhandle: 123,
            notifyHandle: 456, value: true, lastWriteTime: 123 }]);
        assert.deepEqual(Object.keys(item).sort(), ['bytelength', 'lastWriteTime', 'symname']);
        assert.equal(item.lastWriteTime, 0);
    });
    it('accepts hostnames and IPv4, and rejects malformed addresses', () => {
        const validate = new Function('data', `return ${jsonConfig.items.targetIpAdress.validator}`);
        for (const targetIpAdress of ['plc', 'PLC.domain.local', '192.168.0.1', 'plc.local.']) {
            assert.equal(validate({ targetIpAdress }), true, targetIpAdress);
        }
        for (const targetIpAdress of ['', '999.168.0.1', 'https://plc', '-plc', 'plc name', 'plc..local']) {
            assert.equal(validate({ targetIpAdress }), false, targetIpAdress);
        }
    });
    it('expands a struct at datatype index zero without recursing back to the root', async () => {
        const f = fixture();
        f.adapter.config.symbolObjectList = [];
        const session = { adapter: f.adapter, isCurrent: () => true, client: {
            getDatatyps: cb => cb(null, [{ name: 'FirstType', datatyps: [{ name: 'enabled', type: 'BOOL' }] }]),
            getSymbols: cb => cb(null, [{ name: 'GVL.struct', type: 'FirstType' }]),
        } };
        const symbols = await lib.plcVarSyncronizing(session);
        assert.equal(symbols[0].symname, 'GVL.struct.enabled');
    });

    it('parses nested TPY structs and strings with and without XML attributes', async () => {
        const f = fixture({ targetAmsPort: '901', xmlTpyData: `
            <PlcProjectInfo><Symbols><Symbol><Name>.GVL</Name><Type GUID="x">Outer</Type></Symbol></Symbols>
            <DataTypes><DataType><Name>Outer</Name><SubItem><Name GUID="y">nested</Name><Type>Inner</Type></SubItem></DataType>
            <DataType><Name GUID="z">Inner</Name><SubItem><Name>text</Name><Type>STRING(10)</Type></SubItem></DataType></DataTypes></PlcProjectInfo>` });
        const symbols = await lib.tpyParser(f.adapter);
        assert.equal(symbols[0].symname, '.GVL.nested.text');
        assert.equal(symbols[0].bytelength.length, 11);
    });

    it('preserves existing TC2 and TC3 IDs', () => {
        const stateId = lib.createObjectsAndHandles.stateId;
        assert.equal(stateId(fixture({targetAmsPort: '851'}).adapter, 'GVL.x'), 'plc.GVL.x');
        assert.equal(stateId(fixture({targetAmsPort: '801'}).adapter, '.GVL.x'), 'plc.GVL.x');
    });

    it('retains historical prefix matches such as iobroker and iobroker137', async () => {
        const f = fixture({ targetAmsPort: '901', targetVTable: 'iobroker', xmlTpyData:
            '<PlcProjectInfo><Symbols><Symbol><Name>.iobroker.x</Name><Type>BOOL</Type></Symbol><Symbol><Name>.iobroker137.y</Name><Type>INT</Type></Symbol><Symbol><Name>.other.z</Name><Type>BOOL</Type></Symbol></Symbols><DataTypes><DataType><Name>Unused</Name></DataType></DataTypes></PlcProjectInfo>' });
        const symbols = await lib.tpyParser(f.adapter);
        assert.deepEqual(symbols.map(item => item.symname), ['.iobroker.x', '.iobroker137.y']);
        f.adapter.config.targetAmsPort = '851';
        const session = { adapter: f.adapter, isCurrent: () => true, client: {
            getDatatyps: cb => cb(null, []),
            getSymbols: cb => cb(null, [
                { name: 'iobroker.x', type: 'BOOL' }, { name: 'iobroker137.y', type: 'INT' }, { name: 'other.z', type: 'BOOL' },
            ]),
        } };
        const adsSymbols = await lib.plcVarSyncronizing(session);
        assert.deepEqual(adsSymbols.map(item => item.symname), ['iobroker.x', 'iobroker137.y']);
    });
});

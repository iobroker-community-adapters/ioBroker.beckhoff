const events = require('events');
const utils = require('@iobroker/adapter-core');
const ads = require('node-ads-api');
const lib = require('./lib');

const emitter = new events.EventEmitter();

let adsClient = null;
let checkPlcStateInterval = null;
let oldConnectionState = false;
let oldPlcState = false;
let reconnectTimeout = null;

let adapter;

function startAdapter(options) {
    const optionsSave = options || {};

    Object.assign(optionsSave, { name: 'beckhoff' });
    adapter = new utils.Adapter(optionsSave);

    // When Adapter is ready then connecting to PLC and Subscribe necessary Handles
    adapter.on('ready', () => {
        adapter.subscribeStates('*');

        plcConnection();

        emitter.on('updateObjects', () => {
            lib.createObjectsAndHandles(adsClient, adapter);
        });

        emitter.on('newSyncReq', () => {
            if (adapter.config.targetAmsPort === '901') {
                lib.tpyParser(adapter, emitter);
            } else {
                lib.plcVarSyncronizing(adsClient, adapter, emitter);
            }
        });
    });

    // When Adapter would be stopped some last work we have to do
    adapter.on('unload', cb => {
        emitter.removeAllListeners();

        clearTimeout(reconnectTimeout);

        if (adsClient !== null) {
            adsClient.end(() => {
                adsClient = null;

                adapter.log.debug('ADS Connection closed.');
            });
        }

        if (checkPlcStateInterval !== null) {
            clearInterval(checkPlcStateInterval);
            checkPlcStateInterval = null;
        }

        try {
            adapter.setState('info.connection', false, true);
            adapter.setState('info.plcRun', false, true);

            adapter.log.info('Stopped and Connection closed');
        } finally {
            cb();
        }
    });

    // These Function is called when one of the subscribed State fires a 'stateChange' event
    adapter.on('stateChange', (id, state) => {
        if (!state) {
            return;
        }

        const shortId = id.substring(id.indexOf('.', 9) + 1, id.length);

        switch (shortId) {
            case 'info.connection':
                // Only when Value has changed need to do something
                if (oldConnectionState === state.val) {
                    return;
                }

                oldConnectionState = state.val;

                if (state.val === true) {
                    // Connect Worker to write changes of Symbol Values in PLC to ioBroker
                    lib.workerPlcToAdapter(adsClient, adapter, emitter);

                    if (checkPlcStateInterval === null) {
                        checkPlcStateInterval = setInterval(() => {
                            lib.checkPlcState(adsClient, adapter, emitter);
                        }, adapter.config.reconnectInterval * 1000);
                    }
                } else if (checkPlcStateInterval !== null) {
                    clearInterval(checkPlcStateInterval);
                    checkPlcStateInterval = null;
                }
                break;
            case 'info.plcRun':
                // Only when Value has changed need to do something
                if (oldPlcState === state.val) {
                    break;
                }

                oldPlcState = state.val;

                if (state.val === true) {
                    emitter.emit('newSyncReq');
                }

                break;
            default:
                if (oldConnectionState) {
                    lib.workerAdapterToPlc(adsClient, adapter, emitter, state, id);
                }
                break;
        }
    });

    return adapter;
}

/**
 * Establish Connection to PLC and handles some Connectionerror
 *
 * @returns     {void}
 */
function plcConnection() {
    // Create connection configuration for PLC
    const options = {
        host: adapter.config.targetIpAdress,
        amsNetIdTarget: adapter.config.targetAmsNetId,
        amsPortTarget: adapter.config.targetAmsPort === '901' ? '801' : adapter.config.targetAmsPort,
        port: adapter.config.targetTcpPort,
        amsNetIdSource: adapter.config.sourceAmsNetId,
        amsPortSource: adapter.config.sourceAmsPort,
    };

    // New Connection needed -> Create Ads Client and read Deviceinformation
    emitter.on('reConnect', () => {
        adapter.log.debug('Start establish Connection to PLC');

        adsClient = ads.connect(options, () => {
            if (adsClient === null) {
                adapter.log.debug('Establish Connection to PLC failed -> Try again');

                endConnReconnect();

                return;
            }

            adsClient.readState((err, res) => {
                if (err) {
                    adapter.log.error(`ADS Client: Error: ${err}`);
                    endConnReconnect();
                } else {
                    adapter.setState('info.connection', true, true);

                    if (res.adsState === ads.ADSSTATE.RUN) {
                        adapter.setState('info.plcRun', true, true);
                    }

                    adapter.log.info(`Connected to PLC. State of PLC: ${ads.ADSSTATE.fromId(res.adsState)}`);
                }
            });
        });

        // When the Connection have some Problem write Error Log, set disconnected Event and close Connection properly.
        adsClient.on('error', err => {
            adapter.log.error(`ADS Client: ${err}`);

            endConnReconnect();
        });

        adsClient.on('timeout', err => {
            adapter.log.error(`ADS Client: ${err}`);

            endConnReconnect();
        });
    });

    emitter.on('disconnecting', () => {
        endConnReconnect();
    });

    // On first run we need a initial connection
    emitter.emit('reConnect');
}

let timeAlreadyRunning = false;

/**
 * Set States, end connection to PLC properly and shedule reConnect
 *
 * @returns {void}
 */
function endConnReconnect() {
    adapter.setState('info.connection', false, true);
    adapter.setState('info.plcRun', false, true);

    if (timeAlreadyRunning) {
        return;
    }

    timeAlreadyRunning = true;

    if (adsClient !== null) {
        adsClient.end(() => {
            adsClient = null;
        });
    }

    adapter.log.info(`Try to reconnect in ${adapter.config.reconnectInterval} seconds`);

    reconnectTimeout = setTimeout(() => {
        timeAlreadyRunning = false;

        emitter.emit('reConnect');
    }, adapter.config.reconnectInterval * 1000);
}

// If started as allInOne/compact mode => return function to create instance
if (module && module.parent) {
    module.exports = startAdapter;
} else {
    // or start the instance directly
    startAdapter();
}

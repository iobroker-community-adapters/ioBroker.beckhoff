
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 dkleber89 <dkleber89@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

'use strict';

const events = require('events'),
    lib = require('./lib'),
    ads = require('node-ads-api');

const emitter = new events.EventEmitter();

let adsClient = null,
    checkPlcStateInterval = null,
    oldConnectionState = false,
    oldPlcState = false;

// Create new Adapter instance
const adapter = new lib.utils.Adapter({
    'name': 'beckhoff',
    // When Adapter is ready then connecting to PLC and Subscribe necessary Handles
    'ready': () => {
        adapter.subscribeStates('*');

        plcConnection();

        emitter.on('updateObjects', () => {
            lib.createObjectsAndHandles(adsClient, adapter);
        });

        emitter.on('newSyncReq', () => {
            lib.plcVarSyncronizing(adsClient, adapter, emitter);
        });
    },
    // When Adapter would be stopped some last work we have to do
    'unload': (cb) => {
        emitter.removeAllListeners();

        if (checkPlcStateInterval !== null) {
            clearInterval(checkPlcStateInterval);
            checkPlcStateInterval = null;
        }

        adapter.setState('info.connection', false, true);
        adapter.setState('info.plcRun', false, true);

        try {
            if (adsClient === null) {
                adapter.log.info('Stopped and Connection closed');
                cb();
            } else {
                adsClient.end(() => {
                    adsClient = null;
                    adapter.log.info('Stopped and Connection closed');
                    cb();
                });
            }
        } catch (err) {
            adapter.log.warn('Closing Socket on shutdown failed');
            cb();
        }
    },
    // These Function is called when one of the subscribed State fires a 'stateChange' event
    'stateChange': (id, state) => {
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
    }
});

/**
 * Establish Connection to PLC and handles some Connectionerror
 *
 * @returns     {void}
 */
function plcConnection () {
    // Create connection configuration for PLC
    const options = {
        'host': adapter.config.targetIpAdress,
        'amsNetIdTarget': adapter.config.targetAmsNetId,
        'amsPortTarget': adapter.config.targetAmsPort,
        'port': adapter.config.targetTcpPort,
        'amsNetIdSource': adapter.config.sourceAmsNetId,
        'amsPortSource': adapter.config.sourceAmsPort
    };

    // New Connection needed -> Create Ads Client and read Deviceinformation
    emitter.on('reConnect', () => {
        adapter.log.debug('Start establish Connection to PLC');

        adsClient = ads.connect(options, () => {   // eslint-disable-line no-param-reassign
            adsClient.readState((err, res) => {
                if (err) {
                    adapter.log.error(`ADS Client: Error: ${err}`);
                    endConnReconnect(adsClient, adapter, emitter);
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
        adsClient.on('error', (err) => {
            adapter.log.error(`ADS Client: ${err}`);

            endConnReconnect();
        });

        adsClient.on('timeout', (err) => {
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
function endConnReconnect () {
    adapter.setState('info.connection', false, true);
    adapter.setState('info.plcRun', false, true);

    if (timeAlreadyRunning) {
        return;
    }

    timeAlreadyRunning = true;

    adsClient.end(() => {
        adsClient = null;
    });

    adapter.log.info(`Try to reconnect in ${adapter.config.reconnectInterval} seconds`);

    setTimeout(() => {
        timeAlreadyRunning = false;

        emitter.emit('reConnect');
    }, adapter.config.reconnectInterval * 1000);
}

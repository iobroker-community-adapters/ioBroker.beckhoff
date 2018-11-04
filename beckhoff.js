
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
    lib = require('./lib');

const emitter = new events.EventEmitter();


let adsClient = {}, // eslint-disable-line prefer-const
    checkPlcStateInterval = null,
    oldConnectionState = false,
    oldPlcState = false;

// Create new Adapter instance
const adapter = new lib.utils.Adapter({
    'name': 'beckhoff',
    // When Adapter is ready then connecting to PLC and Subscribe necessary Handles
    'ready': () => {
        adapter.subscribeStates('*');

        lib.plcConnection(adapter, emitter, adsClient);

        emitter.on('updateObjects', () => {
            lib.createObjectsAndHandles(adsClient, adapter);
        });

        emitter.on('newSyncReq', () => {
            lib.plcVarSyncronizing(adsClient, adapter, emitter);
        });
    },
    // When Adapter would be stopped some last work we have to do
    'unload': () => {
        emitter.removeAllListeners();

        if (checkPlcStateInterval !== null) {
            clearInterval(checkPlcStateInterval);
            checkPlcStateInterval = null;
        }

        try {
            if (adsClient !== {}) {
                adsClient.end(() => {
                    adapter.log.info('Stopped and Connection closed');
                });
            }
        } catch (err) {
            adapter.log.warn('Closing Adapter on shutdown failed');
        }

        adapter.setState('info.connection', false, true);
        adapter.setState('info.plcRun', false, true);
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

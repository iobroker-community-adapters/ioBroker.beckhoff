
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

const ads = require('node-ads-api'),
    events = require('events'),
    lib = require('./lib');

const emitter = new events.EventEmitter();

let adsClient = null,
    checkPlcStateInterval = null;

// Create new Adapter instance
const adapter = new lib.utils.Adapter({
    'name': 'beckhoff',
    // When Adapter is ready then connecting to PLC and Subscribe necessary Handles
    'ready': () => {
        adapter.subscribeStates('*');

        lib.plcConnection(adapter, emitter, (adsC) => {
            adsClient = adsC;
        });

        emitter.on('updateObjects', () => {
            lib.createObjectsAndHandles(adsClient, adapter);
        });
    },
    // When Adapter would be stopped some last work we have to do
    'unload': () => {
        if (adsClient !== null) {
            adsClient.end();
        }

        adapter.setState('info.connection', false, true);
        adapter.setState('info.plcRun', false, true);

        if (checkPlcStateInterval !== null) {
            clearInterval(checkPlcStateInterval);
            checkPlcStateInterval = null;
        }

        adapter.log.info('Stopped and Connection closed');
    },
    // These Function is called when one of the subscribed State fires a 'stateChange' event
    'stateChange': (id, state) => {
        if (!state) {
            return;
        }

        // When PLC State changes to true make a Resync of Symbol Table
        if (id === `${adapter.namespace}.info.plcRun` && state.val === true) {
            lib.plcVarSyncronizing(adsClient, adapter, emitter);

            return;
        }

        // Write the Changes of States to PLC
        if (lib.workerAdapterToPlc(adsClient, adapter, emitter, state, id)) {
            return;
        }

        // When connection is established checking Run State of PLC in some Intervals
        if (id === `${adapter.namespace}.info.connection`) {
            if (state.val === false) {
                if (checkPlcStateInterval !== null) {
                    clearInterval(checkPlcStateInterval);
                    checkPlcStateInterval = null;
                }

                return;
            }

            if (checkPlcStateInterval === null) {
                checkPlcStateInterval = setInterval(() => {
                    adsClient.readState((err, res) => {
                        if (err) {
                            adapter.log.error(`adsClientReadDeviceStateError: ${err}`);
                            emitter.emit('disconnecting');
                        } else {
                            if (res.adsState === ads.ADSSTATE.RUN) {
                                adapter.setState('info.plcRun', true, true);
                            } else {
                                adapter.setState('info.plcRun', false, true);
                            }

                            adapter.log.debug(`State of PLC: ${ads.ADSSTATE.fromId(res.adsState)}`);
                        }
                    });
                }, adapter.config.reconnectInterval * 1000);
            }

            lib.workerPlcToAdapter(adsClient, adapter, emitter);
        }
    }
});

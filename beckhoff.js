
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

const utils = require(`${__dirname}/lib/utils.js`),
    plcConnection = require(`${__dirname}/lib/plcConnection.js`),
    plcVarSync = require(`${__dirname}/lib/plcVarSync.js`),
    ads = require('node-ads-api'),
    events = require('events');

const emitter = new events.EventEmitter();

let adsClient = null,
    checkPlcStateInterval = null;

const adapter = new utils.Adapter({
    'name': 'beckhoff',
    'ready': () => {
        adapter.subscribeStates('*');

        plcConnection(adapter, emitter, (adsC) => {
            adsClient = adsC;
        });
    },
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
    'stateChange': (id, state) => {
        if (!state) {
            return;
        }

        if (id === `${adapter.namespace}.info.connection` && state.val === true) {
            if (checkPlcStateInterval === null) {
                checkPlcStateInterval = setInterval(() => {
                    this.readState((err, res) => {
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

            return;
        }

        if (id === `${adapter.namespace}.info.connection` && state.val !== false) {
            if (checkPlcStateInterval !== null) {
                clearInterval(checkPlcStateInterval);
                checkPlcStateInterval = null;
            }

            return;
        }

        if (id === `${adapter.namespace}.info.plcRun` && state.val === true) {
            plcVarSync(adsClient, adapter, emitter);
        }
    }
});

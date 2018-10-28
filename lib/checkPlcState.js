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

const ads = require('node-ads-api');

/**
 * Callback description
 *
 * @callback                stateCallback
 * @param       {boolean}   plcState     Is the PLC in Run State?
 */

/**
 * Checks if PLC is in Run State
 *
 * @param   {object}        adsC      adsClient Socket to PLC
 * @param   {object}        adapter   ioBroker Adapter Object to be able to use some Properties and some Methods from the Adapter
 * @param   {object}        emitter   EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @param   {stateCallback} cb        Callback when used on call.
 * @returns {void}
 */
module.exports = (adsC, adapter, emitter, cb) => {
    adsC.readState((err, res) => {
        if (err) {
            adapter.log.error(`adsClientReadDeviceStateError: ${err}`);
            emitter.emit('disconnecting');

            if (cb) {
                cb(false);
            }
        } else {
            if (res.adsState === ads.ADSSTATE.RUN) {
                adapter.setState('info.plcRun', true, true);

                if (cb) {
                    cb(true);
                }
            } else {
                adapter.setState('info.plcRun', false, true);

                if (cb) {
                    cb(false);
                }
            }

            adapter.log.debug(`State of PLC: ${ads.ADSSTATE.fromId(res.adsState)}`);
        }
    });
};

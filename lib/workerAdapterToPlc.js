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

/**
 * Worker to write changes of Values from ioBroker to PLC
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @param   {object}    state       Actual State Object which have fired a stateChangeEvent.
 * @returns {boolean}               StateId was related to this function.
 */
module.exports = (adsC, adapter, emitter, state) => {
    // State was not related to this Function return immediately
    if (state._id.indexOf(`${adapter.namespace}.plc.${adapter.config.targetVTable}`) !== 0) { // eslint-disable-line no-underscore-dangle
        return false;
    }

    // Only need to do something when the State is not Ack -> Changed on ioBroker
    if (!state.ack) {
        return true;
    }

    const plcHandle = {
        'symname': state._id.substring(`${adapter.namespace}.plc.`.length, state._id.length),   // eslint-disable-line no-underscore-dangle
        'bytelength': state.native.bytelength,
        'propname': 'value',
        'value': state.val
    };

    adsC.write(plcHandle, (err) => {
        if (err) {
            adapter.log.warn(`Write Symbol Value from ioBroker to PLC failed: ${err}`);
            emitter.emit('disconnecting');
        } else {
            adapter.log.debug(`Write Symbol Value from ioBroker to PLC: ${plcHandle.symname} -> ${plcHandle.value}`);
        }
    });

    return true;
};

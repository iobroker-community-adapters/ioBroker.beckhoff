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
 * @param   {string}    id          ID String of the actual State that will be prcessed.
 * @returns {boolean}               StateId was related to this function.
 */
module.exports = (adsC, adapter, emitter, state, id) => {   // eslint-disable-line max-params
    // State was not related to this Function return immediately
    if (id.indexOf(`${adapter.namespace}.plc.${adapter.config.targetVTable}`) !== 0) {
        return false;
    }

    // Only need to do something when the State is not Ack -> Changed on ioBroker
    if (state.ack) {
        return true;
    }

    adapter.getObject(id, (err, obj) => {
        if (err) {
            adapter.log.warn(`WorkerAdapterToPLC have Problems to read the Objects: ${err}`);
        }

        let symname = '';

        if (adapter.config.targetAmsPort === 801) { // TC2 needs the Point on TC3 don´t need it
            symname = id.substring(`${adapter.namespace}.plc`.length, id.length);
        } else {
            symname = id.substring(`${adapter.namespace}.plc.`.length, id.length);
        }

        const plcHandle = {
            'symname': symname,
            'bytelength': obj.native.bytelength,
            'propname': 'value',
            'value': state.val
        };

        adsC.write(plcHandle, (error) => {
            if (error) {
                adapter.log.warn(`Write Symbol Value from ioBroker to PLC failed: ${error}`);
                emitter.emit('disconnecting');
            } else {
                adapter.log.debug(`Write Symbol Value from ioBroker to PLC: ${plcHandle.symname} -> ${plcHandle.value}`);
            }
        });
    });

    return true;
};

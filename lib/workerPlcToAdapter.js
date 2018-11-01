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

let tableVersion = -1;
let ioBrokerResync = -1;

/**
 * Register listener to write Value changes from PLC to ioBroker. Also take a look about resync of SymbolTable is needed
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @returns {void}
 */
module.exports = (adsC, adapter, emitter) => {
    adsC.on('notification', (handle) => {
        // When SymbolTable Version has changed
        if (handle.indexGroup === ads.ADSIGRP.SYM_VERSION) {
            if (tableVersion !== handle.value && tableVersion !== -1) {
                emitter.emit('newSyncReq');
            }

            tableVersion = handle.value;

            return;
        }

        // or a iobrokerResync Symbol available and has a changed then trigger a Sync of SymbolTable
        const symbolName = handle.symname.substr(handle.symname.lastIndexOf('.') + 1, handle.symname.length).toLowerCase();

        if (symbolName === 'iobrokerresync') {
            if (ioBrokerResync !== handle.value && ioBrokerResync !== -1) {
                emitter.emit('newSyncReq');
            }

            ioBrokerResync = handle.value;

            return;
        }

        // Skip handles with Value 'null' -> Don´t know wy happen on Adapter stop ...
        if (handle.value === null) {
            return;
        }

        adapter.setState(`plc.${handle.symname}`, handle.value, true, (err) => {
            if (err) {
                adapter.log.warn(`Write Symbol Value from PLC to ioBroker Failed: ${err}`);
                emitter.emit('disconnecting');
            } else {
                adapter.log.debug(`Write Symbol Value from PLC to ioBroker: ${handle.symname} -> ${handle.value}`);
            }
        });
    });
};

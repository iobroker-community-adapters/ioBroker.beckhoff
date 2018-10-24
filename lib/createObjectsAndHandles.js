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

module.exports = (adsC, adapter) => {   // TODO Comment all the things i do here and JSDOC
    adapter.getStatesOf(adapter.namespace, 'plc', (err, res) => {
        if (err) {
            return;
        }

        for (let i = 0; i < res.length; i++) {
            let found = false;

            for (let j = 0; j < adapter.config.symbolObjectList; j++) {
                if (`plc.${adapter.config.symbolObjectList[j].symname}` === res[i]._id) {   // eslint-disable-line no-underscore-dangle
                    found = true;
                    break;
                }
            }

            if (!found) {
                adapter.delState(res[i]._id);   // eslint-disable-line no-underscore-dangle
            }
        }
    });

    for (const item in adapter.config.symbolObjectList) {
        if (Array.hasOwnProperty.call(adapter.config.symbolObjectList, item)) {
            const symbolName = item.symname.substr(item.symname.lastIndexOf('.'), item.symname.length);
            let type = 'number';

            if (item.bytelength === ads.BOOL) {
                type = 'boolean';
            }

            adapter.setObjectNotExists(`plc.${item.symname}`, {
                'type': 'state',
                'common': {
                    'name': symbolName,
                    'type': type,
                    'role': 'state'
                },
                'native': {}
            });

            adsC.notify(item);
        }
    }
};

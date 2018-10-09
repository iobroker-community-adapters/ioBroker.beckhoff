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

module.exports = (adapter, emitter, cb) => {
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
        const adsClient = ads.connect(options, () => {
            this.readDeviceInfo((err, res) => {
                if (err) {
                    adapter.log.error(err);
                } else {
                    cb(this);

                    emitter.emit('connected');

                    adapter.log.info(`Connected to PLC. State of PLC: ${res}`);
                }
            });
        });


        // When the Connection have some Problem write Error Log, set disconnected Event and close Connection properly.
        adsClient.on('error', (err) => {
            adapter.log.error(err);
            emitter.emit('disconnected');

            adsClient.end();
        });

        adsClient.on('timeout', (err) => {
            adapter.log.error(err);
            emitter.emit('disconnected');

            adsClient.end();
        });
    });

    // Set Connection State to false and after a specific delay try to reconnect when a Error occurred
    let reconnectTimeout = null;

    emitter.on('disconnected', () => {
        adapter.setState('info.connection', false, true);

        if (reconnectTimeout === null) {
            reconnectTimeout = setTimeout(() => {
                emitter.emit('reConnect');
            }, adapter.config.reconnectInterval * 1000);
        }
    });

    // When getting connected set connection State to true
    emitter.on('connected', () => {
        reconnectTimeout = null;

        adapter.setState('info.connection', true, true);
    });

    // On first run we need a initial connection
    emitter.emit('reConnect');
};

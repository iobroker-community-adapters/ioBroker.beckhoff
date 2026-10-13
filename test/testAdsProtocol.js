const assert = require('node:assert/strict');
const net = require('node:net');
const ads = require('node-ads-api');
const request = require('../lib/adsRequest');
const { descriptors } = require('../lib/symbolCache');

describe('node-ads-api wire contract against a loopback ADS simulator', () => {
    let server;
    let sockets;
    let clients;
    let connectionNumber;
    let dropRead;
    let handleRequests;
    beforeEach(async () => {
        sockets = new Set(); clients = []; connectionNumber = 0; dropRead = false; handleRequests = 0;
        server = net.createServer(socket => {
            sockets.add(socket); socket.on('close', () => sockets.delete(socket));
            const number = ++connectionNumber;
            let pending = Buffer.alloc(0);
            socket.on('data', data => {
                pending = Buffer.concat([pending, data]);
                while (pending.length >= 6 && pending.length >= pending.readUInt32LE(2) + 6) {
                    const length = pending.readUInt32LE(2) + 6;
                    const frame = pending.subarray(0, length); pending = pending.subarray(length);
                    const command = frame.readUInt16LE(22);
                    let payload;
                    if (command === 2) {
                        if (dropRead) { dropRead = false; continue; }
                        payload = Buffer.alloc(9); payload.writeUInt32LE(1, 4); payload[8] = 1;
                    } else if (command === 9) {
                        handleRequests++;
                        payload = Buffer.alloc(12); payload.writeUInt32LE(4, 4); payload.writeUInt32LE(number * 100, 8);
                    } else if (command === 6) {
                        payload = Buffer.alloc(8); payload.writeUInt32LE(number * 100 + 1, 4);
                    } else {
                        payload = Buffer.alloc(4);
                    }
                    const header = Buffer.from(frame.subarray(0, 38));
                    frame.copy(header, 6, 14, 22); frame.copy(header, 14, 6, 14);
                    header.writeUInt32LE(32 + payload.length, 2);
                    header.writeUInt16LE(5, 24); header.writeUInt32LE(payload.length, 26);
                    socket.write(Buffer.concat([header, payload]));
                }
            });
        });
        await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    });
    afterEach(async () => {
        for (const socket of sockets) socket.destroy();
        for (const client of clients) client.end(() => {});
        await new Promise(resolve => server.close(resolve));
    });
    async function connect(timeout = 500) {
        let client;
        await new Promise((resolve, reject) => {
            client = ads.connect({ host: '127.0.0.1', port: server.address().port,
                amsNetIdTarget: '1.2.3.4.1.1', amsNetIdSource: '6.7.8.9.1.1', timeout }, resolve);
            client.on('error', reject);
            clients.push(client);
        });
        return { client, adapter: { config: { adsTimeout: timeout }, setTimeout, clearTimeout }, isCurrent: () => true };
    }
    it('returns original descriptors and obtains fresh handles after reconnect', async () => {
        const first = await connect();
        const handle = { symname: 'GVL.enabled', bytelength: JSON.parse(JSON.stringify(ads.BOOL)) };
        await request(first, 'notify', handle);
        const read = await request(first, 'read', handle);
        assert.equal(read, handle);
        assert.equal(read.value, true);
        assert.equal(handle.symhandle, 100);
        const [fresh] = descriptors([handle]);
        await new Promise(resolve => first.client.end(resolve));
        const second = await connect();
        await request(second, 'notify', fresh);
        assert.equal(fresh.symhandle, 200);
        assert.equal(handleRequests, 2);
        const version = await request(second, 'read', { indexGroup: ads.ADSIGRP.SYM_VERSION,
            indexOffset: 0, bytelength: ads.BYTE });
        assert.equal(version.value, 1);
        await new Promise(resolve => second.client.end(resolve));
    });
    it('propagates an actual ADS request timeout', async () => {
        const session = await connect(100);
        dropRead = true;
        await assert.rejects(request(session, 'read', { indexGroup: ads.ADSIGRP.SYM_VERSION,
            indexOffset: 0, bytelength: ads.BYTE }), /timeout/);
        await new Promise(resolve => session.client.end(resolve));
    });
});

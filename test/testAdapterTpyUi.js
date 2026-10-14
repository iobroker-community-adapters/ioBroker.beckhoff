const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const proxyquire = require('proxyquire').noCallThru();

describe('TPY preparation with adapter lifecycle', () => {
    it('uses late-loaded configuration and answers Admin with a listed path', async () => {
        const adapter = new EventEmitter();
        adapter.namespace = 'beckhoff.0';
        adapter.config = {};
        const files = new Map([['project.tpy', Buffer.from('<xml/>')]]);
        const errors = [];
        adapter.log = { warn: message => errors.push(message), error: message => errors.push(message) };
        adapter.readDirAsync = async (namespace, folder) => {
            assert.equal(namespace, 'beckhoff.0.tpy');
            assert.equal(typeof folder, 'string');
            const prefix = folder ? `${folder}/` : '';
            return [...files.keys()].filter(name => name.startsWith(prefix) && !name.slice(prefix.length).includes('/')).map(name => ({ file: name.slice(prefix.length), isDir: false }));
        };
        adapter.readFileAsync = async (namespace, name) => ({ file: files.get(name) });
        adapter.writeFileAsync = async (namespace, name, data) => files.set(name, data);
        let started;
        const ready = new Promise(resolve => { started = resolve; });
        class Connection {
            constructor() { this.stopped = false; }
            async start() { started(); }
            async stop() { this.stopped = true; }
        }
        const startAdapter = proxyquire('../beckhoff', {
            '@iobroker/adapter-core': { Adapter: class { constructor() { return adapter; } } },
            './lib/connection': Connection,
        });
        startAdapter();
        adapter.config = { targetAmsPort: '901', tpyFile: 'project.tpy' };
        adapter.emit('ready');
        await ready;
        assert.equal(files.get('tpy/project.tpy').toString(), '<xml/>');
        assert.equal(files.get('project.tpy').toString(), '<xml/>');
        const response = new Promise(resolve => { adapter.sendTo = (from, command, value) => resolve(value); });
        adapter.emit('message', { from: 'system.adapter.admin.0', command: 'prepareTpyFiles', message: { value: 'project.tpy' }, callback: { id: 1 } });
        assert.equal(await response, 'tpy/project.tpy');
        assert.deepStrictEqual(errors, []);
    });
});

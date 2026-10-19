const assert = require('node:assert/strict');
const prepare = require('../lib/tpyFiles');

function fixture(initial) {
    const files = new Map(Object.entries(initial).map(([name, value]) => [name, Buffer.from(value)]));
    const calls = [];
    const adapter = {
        namespace: 'beckhoff.0',
        readDirAsync: async (namespace, folder) => {
            calls.push(folder);
            assert.equal(typeof folder, 'string');
            assert.equal(namespace, 'beckhoff.0.tpy');
            const prefix = folder ? `${folder}/` : '';
            return [...files.keys()].filter(name => name.startsWith(prefix) && !name.slice(prefix.length).includes('/')).map(name => ({ file: name.slice(prefix.length), isDir: false }));
        },
        readFileAsync: async (namespace, name) => {
            assert.equal(namespace, 'beckhoff.0.tpy');
            if (!files.has(name)) throw Error('Not exists');
            return { file: files.get(name) };
        },
        writeFileAsync: async (namespace, name, data) => {
            assert.equal(namespace, 'beckhoff.0.tpy');
            files.set(name, Buffer.from(data));
        },
    };
    return { adapter, files, calls };
}

describe('TPY file selection directory', () => {
    it('prepares existing root files with matching selector values and preserves originals', async () => {
        const { adapter, files, calls } = fixture({ 'project.tpy': '<original/>', 'other.TPY': '<other/>', 'note.txt': 'ignore' });
        assert.equal(await prepare(adapter, '/project.tpy'), 'tpy/project.tpy');
        assert.equal(files.get('project.tpy').toString(), '<original/>');
        assert.equal(files.get('tpy/project.tpy').toString(), '<original/>');
        assert.equal(files.get('tpy/other.tpy').toString(), '<other/>');
        assert.equal(files.has('tpy/note.txt'), false);
        assert.deepStrictEqual(calls, ['', 'tpy']);
    });
    it('preserves a different existing managed file and creates a stable collision-safe copy', async () => {
        const { adapter, files } = fixture({ 'project.tpy': '<old/>', 'tpy/project.tpy': '<new/>' });
        const selected = await prepare(adapter, 'project.tpy');
        assert.match(selected, /^tpy\/project-[a-f0-9]{16}\.tpy$/);
        assert.equal(files.get('tpy/project.tpy').toString(), '<new/>');
        assert.equal(files.get(selected).toString(), '<old/>');
        const count = files.size;
        assert.equal(await prepare(adapter, 'project.tpy'), selected);
        assert.equal(files.size, count);
    });
    it('retains a managed selection and does not select a file for legacy XML-only settings', async () => {
        const { adapter, files } = fixture({ 'tpy/project.tpy': '<new/>' });
        assert.equal(await prepare(adapter, 'tpy/project.tpy'), 'tpy/project.tpy');
        assert.equal(await prepare(adapter, ''), '');
        assert.equal(files.size, 1);
    });
    it('maps an older subfolder selection and rejects traversal before any file access', async () => {
        const { adapter, files, calls } = fixture({ 'old/project.tpy': '<xml/>' });
        assert.equal(await prepare(adapter, 'old/project.tpy'), 'tpy/project.tpy');
        assert.equal(files.get('old/project.tpy').toString(), '<xml/>');
        calls.length = 0;
        await assert.rejects(prepare(adapter, '../project.tpy'), /Invalid TPY path/);
        assert.equal(calls.length, 0);
    });
});

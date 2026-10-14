const crypto = require('node:crypto');

/**
 * Prepare a named directory for Admin's native file selector, preserving originals.
 *
 * @param {Record<string, any>} adapter Adapter file API.
 * @param {string} [selected] Current TPY path.
 * @returns {Promise<string>} Selected path in the managed directory, or empty.
 */
async function prepareTpyFiles(adapter, selected = '') {
    const namespace = `${adapter.namespace}.tpy`;
    const selection = String(selected || '').replace(/^\/+/, '');
    if (selection.includes('\0') || selection.includes('\\') || selection.split('/').includes('..')) {
        throw new Error('Invalid TPY path');
    }
    const rootFiles = await adapter.readDirAsync(namespace, '');
    const managedFiles = await adapter.readDirAsync(namespace, 'tpy');
    const existing = new Set(managedFiles.filter(file => !file.isDir).map(file => file.file));
    const mapped = new Map();
    const read = async name => Buffer.from((await adapter.readFileAsync(namespace, name)).file);
    /**
     * @param {string} name Source path.
     * @returns {Promise<string>} Managed path.
     */
    const copy = async name => {
        const data = await read(name);
        let basename = name
            .split('/')
            .pop()
            .replace(/\.tpy$/i, '.tpy');
        if (existing.has(basename)) {
            if ((await read(`tpy/${basename}`)).equals(data)) {
                return `tpy/${basename}`;
            }
            const digest = crypto.createHash('sha256').update(data).digest('hex').slice(0, 16);
            basename = `${basename.slice(0, -4)}-${digest}.tpy`;
            if (existing.has(basename)) {
                if ((await read(`tpy/${basename}`)).equals(data)) {
                    return `tpy/${basename}`;
                }
                throw new Error('Conflicting TPY copy; existing files were preserved');
            }
        }
        await adapter.writeFileAsync(namespace, `tpy/${basename}`, data);
        existing.add(basename);
        return `tpy/${basename}`;
    };
    for (const file of rootFiles) {
        if (!file.isDir && /^[^/\\]+\.tpy$/i.test(file.file)) {
            mapped.set(file.file, await copy(file.file));
        }
    }
    if (!selection) {
        return '';
    }
    if (selection.startsWith('tpy/')) {
        return selection;
    }
    if (!/\.tpy$/i.test(selection)) {
        throw new Error('Selected file must be a TPY file');
    }
    return mapped.get(selection) || (await copy(selection));
}

module.exports = prepareTpyFiles;

const utils = require('@iobroker/adapter-core');
const ads = require('node-ads-api');
const lib = require('./lib');
const Connection = require('./lib/connection');
const prepareTpyFiles = require('./lib/tpyFiles');

/**
 * Create an independent adapter instance, including in compact mode.
 *
 * @param {Record<string, any>} [options] Adapter options.
 * @returns {Record<string, any>} Adapter instance.
 */
function startAdapter(options) {
    const adapter = new utils.Adapter({ ...options, name: 'beckhoff' });
    /** @returns {Record<string, any>} Native settings loaded by the adapter core. */
    const getConfig = () => adapter.config;
    const connection = new Connection(adapter, ads, lib);
    let preparation = Promise.resolve();
    const prepare = selected => {
        const result = preparation.then(() => prepareTpyFiles(adapter, selected));
        preparation = result.then(
            () => {},
            () => {},
        );
        return result;
    };
    adapter.on('ready', () => {
        (async () => {
            const config = getConfig();
            if (String(config.targetAmsPort) === '901') {
                try {
                    // Only the runtime copy changes. Native settings remain intact until saved in Admin.
                    config.tpyFile = await prepare(config.tpyFile || '');
                } catch (error) {
                    adapter.log.warn(`Cannot prepare TPY file selection: ${error.message}`);
                }
            }
            if (!connection.stopped) {
                await connection.start();
            }
        })().catch(error => adapter.log.error(`Cannot start ADS connection: ${error.message}`));
    });
    adapter.on('message', message => {
        if (message?.command !== 'prepareTpyFiles' || !message.callback) {
            return;
        }
        const config = getConfig();
        const value = typeof message.message?.value === 'string' ? message.message.value : config.tpyFile || '';
        prepare(value)
            .then(path => adapter.sendTo(message.from, message.command, path, message.callback))
            .catch(error => {
                adapter.log.warn(`Cannot prepare TPY file selection: ${error.message}`);
                adapter.sendTo(message.from, message.command, config.tpyFile || '', message.callback);
            });
    });
    adapter.on('unload', callback => {
        connection
            .stop()
            .catch(error => adapter.log.warn(`ADS shutdown: ${error.message}`))
            .finally(callback);
    });
    adapter.on('stateChange', (id, state) => connection.stateChange(id, state));
    return adapter;
}

if (require.main !== module) {
    module.exports = startAdapter;
} else {
    startAdapter();
}

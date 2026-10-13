const utils = require('@iobroker/adapter-core');
const ads = require('node-ads-api');
const lib = require('./lib');
const Connection = require('./lib/connection');

/**
 * Create an independent adapter instance, including in compact mode.
 *
 * @param {Record<string, any>} [options] Adapter options.
 * @returns {Record<string, any>} Adapter instance.
 */
function startAdapter(options) {
    const adapter = new utils.Adapter({ ...options, name: 'beckhoff' });
    const connection = new Connection(adapter, ads, lib);
    adapter.on('ready', () => {
        connection.start().catch(error => adapter.log.error(`Cannot start ADS connection: ${error.message}`));
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

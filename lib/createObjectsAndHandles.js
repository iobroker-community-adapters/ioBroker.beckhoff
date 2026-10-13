const ads = require('node-ads-api');
const request = require('./adsRequest');

/**
 * Preserve existing TwinCAT 2/3 object IDs.
 *
 * @param {Record<string, any>} adapter Adapter instance.
 * @param {string} symbol Symbol name.
 * @returns {string} Relative object ID.
 */
function stateId(adapter, symbol) {
    return adapter.config.targetAmsPort === '851' ? `plc.${symbol}` : `plc${symbol}`;
}

/**
 * Reconcile objects on metadata changes and register fresh subscriptions.
 *
 * @param {Record<string, any>} session Active connection.
 * @param {boolean} reconcile Whether metadata was downloaded.
 * @returns {Promise<void>} Resolves when subscriptions are ready.
 */
module.exports = async (session, reconcile) => {
    const { adapter } = session;
    const symbols = adapter.config.symbolObjectList;
    const assertCurrent = () => {
        if (!session.isCurrent()) {
            throw new Error('Connection changed');
        }
    };
    if (reconcile) {
        const ids = new Set(symbols.map(item => stateId(adapter, item.symname)));
        const objects = await adapter.getStatesOfAsync(adapter.namespace, 'plc');
        for (const object of objects) {
            assertCurrent();
            const id = object._id.replace(`${adapter.namespace}.`, '');
            if (object.native?.bytelength && !ids.has(id)) {
                await adapter.delObjectAsync(id);
            }
        }
        for (const item of symbols) {
            assertCurrent();
            if (item.symname.split('.').pop().toLowerCase() === 'iobrokerresync') {
                continue;
            }
            const id = stateId(adapter, item.symname);
            let type = 'number';
            let role = 'level';
            if (item.bytelength.name === 'BOOL') {
                type = 'boolean';
                role = 'switch';
            } else if (item.bytelength.name === 'STRING') {
                type = 'string';
                role = 'text';
            } else if (['TIME', 'TIME_OF_DAY', 'TOD', 'DATE', 'DATE_AND_TIME', 'DT'].includes(item.bytelength.name)) {
                type = 'string';
                role = 'date';
            }
            const name = item.symname.split('.').pop();
            const def = type === 'boolean' ? false : type === 'string' ? '' : 0;
            const label =
                item.bytelength.name === 'STRING' ? `STRING(${item.bytelength.length - 1})` : item.bytelength.name;
            await adapter.setObjectNotExistsAsync(id.slice(0, id.lastIndexOf('.')), { type: 'channel' });
            assertCurrent();
            await adapter.setObjectNotExistsAsync(id, {
                type: 'state',
                common: { type, role, def, name: `${name} [${label}]`, read: true, write: true },
                native: { bytelength: item.bytelength },
            });
            assertCurrent();
            // Keep custom names, roles, units and user settings.
            await adapter.extendObjectAsync(id, { common: { type }, native: { bytelength: item.bytelength } });
        }
    }
    await request(session, 'releaseNotificationHandles');
    if (adapter.config.targetAmsPort !== '901') {
        await request(session, 'notify', { indexGroup: ads.ADSIGRP.SYM_VERSION, indexOffset: 0, bytelength: ads.BYTE });
    }
    for (const item of symbols) {
        if (['TIME', 'TIME_OF_DAY', 'TOD', 'DATE', 'DATE_AND_TIME', 'DT'].includes(item.bytelength.name)) {
            item.bytelength.useLocalTimezone = false;
        }
        await request(session, 'notify', item);
    }
};

module.exports.stateId = stateId;

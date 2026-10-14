const ads = require('node-ads-api');
const { stateId } = require('./createObjectsAndHandles');

/**
 * Process a notification or an explicit read from the active connection.
 *
 * @param {Record<string, any>} session Active connection.
 * @param {Record<string, any>} handle ADS value descriptor.
 * @returns {Promise<void>} Completes when the value has been acknowledged.
 */
module.exports = async (session, handle) => {
    if (!session.isCurrent()) {
        return;
    }
    if (handle.indexGroup === ads.ADSIGRP.SYM_VERSION) {
        if (session.symbolVersion !== null && session.symbolVersion !== handle.value) {
            session.metadataChanged();
        }
        return;
    }
    if (!handle.symname || handle.value === null || handle.value === undefined) {
        return;
    }
    const item = session.adapter.config.symbolObjectList.find(symbol => symbol.symname === handle.symname);
    // node-ads-api returns the original descriptor. Ignore released subscriptions
    // and reads from a previous metadata generation, even on the same socket.
    if (!item || item !== handle) {
        return;
    }
    if (handle.symname.split('.').pop().toLowerCase() === 'iobrokerresync') {
        if (session.resyncValue !== null && session.resyncValue !== handle.value) {
            session.metadataChanged();
        }
        session.resyncValue = handle.value;
        return;
    }
    if (!session.acceptValues) {
        return;
    }
    const value =
        handle.value instanceof Date ? handle.value.toISOString().replace('T', ' ').replace('Z', '') : handle.value;
    await session.adapter.setStateAsync(stateId(session.adapter, handle.symname), value, true);
    if (session.isCurrent()) {
        item.lastWriteTime = 0;
    }
};

const request = require('./adsRequest');
const { stateId } = require('./createObjectsAndHandles');

/**
 * Apply an explicitly requested write using the current session's symbol type.
 *
 * @param {Record<string, any>} session Active connection.
 * @param {Record<string, any>} state Requested state value.
 * @param {string} id Full object ID.
 * @returns {Promise<void>} Write completion.
 */
module.exports = async (session, state, id) => {
    if (!session.isCurrent() || !session.ready || state.ack) {
        return;
    }
    const { adapter } = session;
    const item = adapter.config.symbolObjectList.find(
        symbol => `${adapter.namespace}.${stateId(adapter, symbol.symname)}` === id,
    );
    if (!item || item.symname.split('.').pop().toLowerCase() === 'iobrokerresync') {
        return;
    }
    let value = state.val;
    if (item.bytelength.name === 'STRING') {
        if (typeof value !== 'string') {
            adapter.log.warn(`Expected a string for ${id}`);
            return;
        }
        if (value.length > item.bytelength.length - 1) {
            adapter.log.warn(`Truncate string for ${id} to ${item.bytelength.length - 1} characters.`);
            value = value.slice(0, item.bytelength.length - 1);
        }
    } else if (['TIME', 'TIME_OF_DAY', 'TOD', 'DATE', 'DATE_AND_TIME', 'DT'].includes(item.bytelength.name)) {
        value = new Date(value);
        if (Number.isNaN(value.getTime())) {
            adapter.log.warn(`Invalid date for ${id}`);
            return;
        }
    }
    item.lastWriteTime = Date.now();
    await request(session, 'write', { ...item, propname: 'value', value });
};

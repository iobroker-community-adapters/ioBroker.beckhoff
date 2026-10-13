/**
 * Copy only reusable symbol metadata. ADS mutates its input with session handles.
 *
 * @param {Array} symbols Symbol descriptions.
 * @returns {Array} Fresh descriptors without handles or pending writes.
 */
function descriptors(symbols) {
    return symbols.map(item => ({
        symname: item.symname,
        bytelength: JSON.parse(JSON.stringify(item.bytelength)),
        lastWriteTime: 0,
    }));
}

/**
 * Identify the configured PLC and variable selection.
 *
 * @param {Record<string, any>} config Adapter configuration.
 * @returns {string} Cache identity.
 */
function identity(config) {
    return JSON.stringify([
        config.targetIpAdress,
        config.targetAmsNetId,
        String(config.targetAmsPort),
        config.targetTcpPort,
        config.targetVTable,
        config.xmlTpyData,
    ]);
}

module.exports = { descriptors, identity };

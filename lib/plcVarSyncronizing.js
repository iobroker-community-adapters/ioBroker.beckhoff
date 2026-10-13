const ads = require('node-ads-api');
const request = require('./adsRequest');

/**
 * Download and expand symbol metadata without creating session handles.
 *
 * @param {Record<string, any>} session Active connection.
 * @returns {Promise<Array>} Selected symbol descriptors.
 */
module.exports = async session => {
    const { adapter } = session;
    const datatypes = await request(session, 'getDatatyps');
    const symbols = await request(session, 'getSymbols');
    const prefix = `${adapter.config.targetAmsPort === '851' ? '' : '.'}${adapter.config.targetVTable}`.toLowerCase();
    const selected = symbols.filter(symbol => {
        const name = symbol.name.toLowerCase();
        // Existing configurations use a prefix, including similarly named GVLs.
        return !adapter.config.targetVTable || name.startsWith(prefix);
    });
    if (!selected.length) {
        throw new Error(`No variables found in table (${adapter.config.targetVTable})`);
    }
    return createSymbolObjectList(datatypes, selected);
};

/**
 * Create a Array that contains a objects with a exact construction to use it with the node-ads-api Package
 *
 * @param   {Array}     datatypList         List of all known Datatypes in PLC with Subdatatypelists
 * @param   {Array}     symbolList          SymbolList of all Symbols in PLC they are reachable over ADS
 * @param   {number}    [datatypeIndex]     Index of Datatype to find it in recusion fast and without seek
 * @param   {string}    [prefix]            Symbolprefix to walk trought the Symboltree of Symbollist of PLC
 * @returns {Array}                         SymbolList for creating States in ioBroker and subscibe the Handles
 */
function createSymbolObjectList(datatypList, symbolList, datatypeIndex, prefix) {
    const knownDatatypes = [
        'BOOL',
        'BYTE',
        'WORD',
        'DWORD',
        'SINT',
        'USINT',
        'INT',
        'UINT',
        'DINT',
        'UDINT',
        'REAL',
        'LREAL',
        'TIME',
        'TIME_OF_DAY',
        'TOD',
        'DATE',
        'DATE_AND_TIME',
        'DT',
    ];

    const tempObject = {
        symname: '',
        bytelength: null,
        lastWriteTime: 0,
    };

    let symbolObjectList = [];

    // On first Call we have no prefix or datatypeIndex so we search on first Level in Symbol Tree
    if (!prefix || typeof datatypeIndex === 'undefined') {
        for (let i = 0; i < symbolList.length; i += 1) {
            // Array Member?
            if (
                knownDatatypes.includes(symbolList[i].type) &&
                Object.prototype.hasOwnProperty.call(symbolList[i], 'arrayid')
            ) {
                throw new Error(`Unsupported Array (${symbolList[i].name}) found!!`);
            }

            // Is the Datatype a known basic Datatype then Create an Push Datapointobject to OutputArray
            if (symbolList[i].type.match('^STRING\\(\\d+\\)$') || knownDatatypes.includes(symbolList[i].type)) {
                tempObject.symname = symbolList[i].name;

                if (symbolList[i].type.match('^STRING\\(\\d+\\)$')) {
                    tempObject.bytelength = ads.string(symbolList[i].size - 1);
                } else {
                    tempObject.bytelength = ads[symbolList[i].type];
                }

                symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));

                continue;
            }

            // No basic Datatype, then we need to seek in Userdatatypes
            let found = false;

            for (let j = 0; j < datatypList.length; j += 1) {
                // When a Userdataype is available proceed with the next Level in the Tree
                if (datatypList[j].name === symbolList[i].type) {
                    symbolObjectList = symbolObjectList.concat(
                        createSymbolObjectList(datatypList, symbolList, j, `${symbolList[i].name}.`),
                    );

                    found = true;

                    break;
                }
            }

            // Userdatatype not found (normaly Impossible) or Basedatatype not supported then throw an Error
            if (!found) {
                throw new Error(`Type (${symbolList[i].type}) not Found or not Supported!!`);
            }
        }

        return symbolObjectList;
    }

    // Here we are in Level 2 or deeper in the Symbol Tree

    // Found a Datatyp thats not a Struct
    if (!Object.prototype.hasOwnProperty.call(datatypList[datatypeIndex], 'datatyps')) {
        throw new Error(`Type (${datatypList[datatypeIndex].name}) found but not Supported!!`);
    }

    const { datatyps } = datatypList[datatypeIndex];

    for (let i = 0; i < datatyps.length; i += 1) {
        // Array Member?
        if (knownDatatypes.includes(datatyps[i].type) && Object.prototype.hasOwnProperty.call(datatyps[i], 'arrayid')) {
            throw new Error(`Unsupported Array (${prefix}${datatyps[i].name}) found!!`);
        }

        // When we found here some basic Datatypes -> Adding to Datapointarray with complete Path
        if (datatyps[i].type.match('^STRING\\(\\d+\\)$') || knownDatatypes.includes(datatyps[i].type)) {
            tempObject.symname = `${prefix}${datatyps[i].name}`;

            if (datatyps[i].type.match('^STRING\\(\\d+\\)$')) {
                tempObject.bytelength = ads.string(datatyps[i].size - 1);
            } else {
                tempObject.bytelength = ads[datatyps[i].type];
            }

            symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
            continue;
        }

        // No basic Datatype so we have dive a Level deeper in the Tree...
        let found = false;

        for (let j = 0; j < datatypList.length; j += 1) {
            if (datatypList[j].name === datatyps[i].type) {
                symbolObjectList = symbolObjectList.concat(
                    createSymbolObjectList(datatypList, symbolList, j, `${prefix}${datatyps[i].name}.`),
                );

                found = true;

                break;
            }
        }

        // Userdatatype not found (normaly Impossible) or Basedatatype not supported then throw an Error
        if (!found) {
            throw new Error(`Type (${datatyps[i].type}) not Found or not Supported!!`);
        }
    }

    return symbolObjectList;
}

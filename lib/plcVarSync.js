/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2018 dkleber89 <dkleber89@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

'use strict';

const ads = require('node-ads-api');

/**
 * Load complete Symbol Table and Datatypes from PLC to create the needed Array with all necessary Symbols for further usage.
 *
 * @param   {object}  adsC      adsClient Socket to PLC
 * @param   {object}  adapter   ioBroker Adapter Object to be able to use some Properties and some Methods from the Adapter
 * @returns {void}
 */
module.exports = (adsC, adapter) => {
    adsC.getDatatyps((err, datatypList) => {
        if (err) {
            adapter.log.error(`adsClientGetSymbolsError: ${err}`);

            return;
        }

        adsC.getSymbols((error, symbolList) => {
            if (error) {
                adapter.log.error(`adsClientGetSymbolsError: ${error}`);

                return;
            }

            const filteredSymbolList = [];

            for (let i = 0; i < symbolList.length; i++) {
                if (symbolList[i].name.toLowerCase().indexOf(adapter.config.targetVTable.toLowerCase()) === 0) {
                    filteredSymbolList.push(symbolList[i]);
                }
            }

            if (filteredSymbolList === []) {
                adapter.log.info(`No Variables in Table (${adapter.config.targetVTable})are found in PLC. Please check your  Tablename`);

                return;
            }
            try {
                adapter.config.symbolObjectList = createSymbolObjectList(datatypList, filteredSymbolList);
            } catch (e) {
                adapter.log.warn(`Sync PLC Variables: ${e} Please Check your Variable Table and your Datatypes in PLC`);
            }
        });
    });
};

/**
 * Create a Array that contains a objects with a exact construction to use it with the node-ads-api Package
 *
 * @param   {array}     datatypList         List of all known Datatypes in PLC with Subdatatypelists
 * @param   {array}     symbolList          SymbolList of all Symbols in PLC they are reachable over ADS
 * @param   {number}    [datatypeIndex]     Index of Datatype to find it in recusion fast and without seek
 * @param   {string}    [prefix]            Symbolprefix to walk trought the Symboltree of Symbollist of PLC
 * @returns {array}                         SymbolList for creating States in ioBroker and subscibe the Handles
 */
function createSymbolObjectList (datatypList, symbolList, datatypeIndex, prefix) {
    const knownDatatypes = ['BOOL', 'BYTE', 'WORD', 'DWORD', 'SINT', 'USINT', 'INT', 'UINT', 'DINT', 'UDINT', 'REAL'],
        symbolObjectList = [],
        tempObject = {
            'symname': '',
            'bytelength': null
        };

    // On first Call we have no prefix or datatypeIndex so we search on first Level in Symbol Tree
    if (!prefix || !datatypeIndex) {
        for (let i = 0; i < symbolList.length; i++) {
            // Is the Datatype a known basic Datatype then Create an Push Datapointobject to OutputArray
            if (knownDatatypes.includes(symbolList[i].type)) {
                tempObject.symname = symbolList[i].name;
                tempObject.bytelength = ads[symbolList[i].type];

                symbolObjectList.push(tempObject);
                continue;
            }

            // No basic Datatype, then we need to seek in Userdatatypes
            let found = false;

            for (let j = 0; j < datatypList.length; j++) {
                // When a Userdataype is available proceed with the next Level in the Tree
                if (datatypList[j].name === symbolList[i].type) {
                    symbolObjectList.concat(createSymbolObjectList(datatypList, symbolList, j, `${symbolList[i].name}.`));

                    found = true;

                    break;
                }
            }

            // Userdatatype not found (normaly Impossible) then throw an Error
            if (!found) {
                throw new Error('Type not Found!!');
            }
        }

        return symbolObjectList;
    }

    // Here we are in Level 2 or deeper in the Symbol Tree
    const datatyps = datatypList[datatypeIndex].datatyps;

    for (let i = 0; i < datatyps.length; i++) {
        // When we found here some basic Datatypes -> Adding to Datapointarray with complete Path
        if (knownDatatypes.includes(datatyps[i].type)) {
            tempObject.symname = `${prefix}${datatyps[i].name}`;
            tempObject.bytelength = ads[datatyps[i].type];

            symbolObjectList.push(tempObject);
            continue;
        }

        // No basic Datatype so we have dive a Level deeper in the Tree...
        let found = false;

        for (let j = 0; j < datatypList.length; j++) {
            if (datatypList[j].name === symbolList[i].type) {
                symbolObjectList.concat(createSymbolObjectList(datatypList, symbolList, j, `${prefix}${datatyps[i].name}.`));

                found = true;

                break;
            }
        }

        // Userdatatype not found (normaly Impossible) then throw an Error
        if (!found) {
            throw new Error('Type not Found!!');
        }
    }

    return symbolObjectList;
}

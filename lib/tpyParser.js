const xml2js = require('xml2js');
const ads = require('node-ads-api');
const { parse, basename } = require('path');
// /**
//  * 
//  * @param {object} obj Object with name, optional cycleTime, maxDelay, transmissionMode
//  * @param {string} symname Symname of found object
//  * @param {array} list symbolObjectList to convert to one symbolObject with all Items als List
//  */
// function convertToGlobal(obj, symname, list) {
//     let i = 0;
//     let ret = {
//         symname: symname,
//         bytelength: list.map(x => { symname: x.symname == '' ? `padding[${i++}]` : `value${x.symname}`, x.bytelength }),
//         lastWriteTime: 0,
//     };
//     ['cycleTime', 'maxDelay', 'transmissionMode'].forEach(x => { if (typeof obj[x] != 'undefined') ret[x] = obj[x]; });
//     return ret;
// }

/***
 * Function to get first item in Array with _ or without
 * @param {array} arr Array to get first item from
 * @returns {string|null} First item in Array or null if Array is empty
 */
function fromArr(arr) {
    return arr == null ? null : arr[0]._ ?? arr[0];
}

function arrayPopulate(arraytype, name, typeFunc) {
    const isArray = arraytype != null;
    const minIx = arraytype ? parseInt(fromArr(arraytype.LBound)) : 0;
    const elements = arraytype ? parseInt(fromArr(arraytype.Elements)) : 1;
    let result = [];
    for (let i = 0; i < elements; i++) {
        const arrName = arraytype ? `[${minIx + i}]` : '';
        let res = typeFunc(`${name}${arrName}`);
        if (!Array.isArray(res)) res = [res];
        result.push(...res);
    }
    return result;
}

function getType(searchtype, datatyps, symname) {
    let datatype = searchtype;
    const stringmatch = /^STRING\((\d+)\)$/;
    let dttype = datatyps.find(dt => fromArr(dt.Name) === datatype);
    if (dttype) datatype = fromArr(dttype.Type);

    //if (knownDatatypes.includes(datatype)) 
    if (ads.hasOwnProperty(datatype))
        return arrayPopulate(fromArr(dttype?.ArrayInfo), symname, (symnname) => { return { symname: symnname, ...ads[datatype] }; });

    // Is the Datatype a String then Create an Push Datapointobject to OutputArray
    const check = stringmatch.exec(datatype);
    if (check)
        return arrayPopulate(fromArr(dttype?.ArrayInfo), symname, (symnname) => { return { symname: symnname, ...ads.string(parseInt(check[1])) }; });

    if (!dttype) throw new Error(`Type (${datatype}) not Found!!`);
    if (!dttype.SubItem && !dttype.Type) throw new Error(`Type (${fromArr(dttype.Name)}) found but not Supported!!`);

    // structure / Array / Enum
    const datatyp = dttype.SubItem || [fromArr(dttype.Type)];

    let bitsize = dttype.BitSize != null ? parseInt(dttype.BitSize[0]) / (dttype.ArrayInfo != null ? parseInt(fromArr(fromArr(dttype.ArrayInfo)?.Elements)) : 1)  : 0;
    return arrayPopulate(fromArr(dttype?.ArrayInfo), symname, (symnname) => {
        let offset = 0;
        let result = [];
        for (let i = 0; i < datatyp.length; i++) {
            let bitoffs = fromArr(datatyp[i].BitOffs);
            bitoffs = bitoffs ? parseInt(bitoffs) : 0;
            if (offset != bitoffs) {
                result.push({ symname: null, name: 'PADDING', length: (bitoffs - offset) / 8 });
                offset = bitoffs;
            }
            arrayPopulate(fromArr(datatyp[i].ArrayInfo), `${symnname}${fromArr(datatyp[i].Name) ? '.' + fromArr(datatyp[i].Name) : ''}`, (arrName) => {
                datatype = getType(fromArr(datatyp[i].Type) ?? datatyp[i], datatyps, arrName);
                result.push(...datatype);
                offset += datatype.reduce((l, { length }) => l + length, 0) * 8;
            });
        }
        if (offset != bitsize) 
            result.push({ symname: null, name: 'PADDING', length: (bitsize - offset) / 8 });
        return result;
    });
}

/**
 * @param   {object}  adapter   ioBroker Adapter Object to be able to use some Properties and some Methods from the Adapter
 * @param   {object}        emitter   EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @returns {void}
 */
module.exports = (adapter, emitter) => {
    if (adapter.config.xmlTpyData === '') {
        adapter.log.error('No *.tpy File was Uploaded. Please upload a *.tpy File or use an other Mode in Config Window.');

        return;
    }

    xml2js.parseString(
        adapter.config.xmlTpyData,
        {
            parseBooleans: true,
            parseNumbers: true,
            normalize: true,
        },
        (error, result) => {
            if (error) {
                adapter.log.error('No proper *.tpy File was Uploaded. Please upload a proper *.tpy File or use an other Mode in Config Window.');

                return;
            }

            const symbols = result.PlcProjectInfo.Symbols[0].Symbol;
            const dataTypes = result.PlcProjectInfo.DataTypes[0].DataType;
            const v2prefix = adapter.config.targetAmsPort.indexOf('01') >= 1 ? "." : "";

            //the config.targetVTable can consist of a , seperated list of string or a JSON Array
            //e.g. "gSymobl1" or "Symbol1,Symbol2" or ["Symbol1",{"name":"Symbol2","cycleTime":1000,"maxDelay":500,"transmissionMode":"cyclic"}]
            const filteredSymbols = [];
            let vtables;
            try {
                vtables = JSON.parse(adapter.config.targetVTable);
                if (!Array.isArray(vtables)) vtables = [vtables];
            }
            catch {
                vtables = adapter.config.targetVTable.split(',');
            }
            adapter.config.symbolObjectList = vtables.map(x => {
                let result = typeof x === 'string' ? { name: x } : x;
                const search = `${v2prefix}${x.name.toLowerCase()}`;
                let symbol = symbols.find(s =>
                    fromArr(s.Name).toLowerCase() == search);
                if (!symbol) {
                    adapter.log.warn(`Couldn't find Symbol: ${search} in PLC. Please check your Tablename`);
                    return null;
                }
                try {
                    const datatype = getType(fromArr(symbol.Type), dataTypes, `${v2prefix}${x.name}`);
                    let i = 0;
                    return {
                        ...result
                        , bytelength: datatype.map(dt => {return {...dt, symname: dt.symname ? dt.symname : `padding[${i++}]`};})
                        , symname: `${v2prefix}${x.name}`
                    };
                }
                catch (e) {
                    adapter.log.warn(`Cound't parse DataType: ${e} Please Check your Variable Table and your Datatypes in PLC`);
                }
                return null;
            });

            adapter.log.debug(`SymbolObjectList: ${JSON.stringify(adapter.config.symbolObjectList)}`);

            if (adapter.config.symbolObjectList.length == 0) {
                adapter.log.info(`No Variables in Table (${adapter.config.targetVTable}) are found in PLC. Please check your Tablename`);

                return;
            }

            emitter.emit('updateObjects');
        }
    );
};

// /**
//  * Create a Array that contains a objects with a exact construction to use it with the node-ads-api Package
//  *
//  * @param   {array}     datatyps            List of all known Datatypes in PLC with Subdatatypelists
//  * @param   {array}     symbols             SymbolList of all Symbols in PLC they are reachable over ADS
//  * @param   {number}    [datatypeIndex]     Index of Datatype to find it in recusion fast and without seek
//  * @param   {string}    [prefix]            Symbolprefix to walk trought the Symboltree of Symbollist of PLC
//  * @param   {number}    offset              Offset to consider for padding
//  * @returns {array}                         SymbolList for creating States in ioBroker and subscibe the Handles
//  */
// function createSymbolObjectList(adapter, datatyps, symbols, datatypeIndex, prefix, size) {
//     const knownDatatypes = [
//         'BOOL',
//         'BYTE',
//         'WORD',
//         'DWORD',
//         'SINT',
//         'USINT',
//         'INT',
//         'UINT',
//         'DINT',
//         'UDINT',
//         'REAL',
//         'LREAL',
//         'TIME',
//         'TIME_OF_DAY',
//         'TOD',
//         'DATE',
//         'DATE_AND_TIME',
//         'DT',
//     ];

//     const tempObject = {
//         symname: '',
//         bytelength: null,
//         lastWriteTime: 0,
//     };

//     //Function to get first item in Array with _ or without
//     const fromArr = arr => arr == null ? null : arr[0]._ ?? arr[0];

//     let symbolObjectList = [];

//     // On first Call we have no prefix or datatypeIndex so we search on first Level in Symbol Tree
//     if (!prefix || typeof datatypeIndex === 'undefined') {
//         for (let i = 0; i < symbols.length; i += 1) {
//             tempObject.symname = fromArr(symbols[i].Name);
//             let type = fromArr(symbols[i].Type);

//             // Is the Datatype a known basic Datatype then Create an Push Datapointobject to OutputArray
//             if (knownDatatypes.includes(type)) {
//                 tempObject.bytelength = ads[type];

//                 symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//                 continue;
//             }

//             // Is the Datatype a String then Create an Push Datapointobject to OutputArray
//             const check = type.match('^STRING\\(\\d+\\)$');
//             if (check) {
//                 tempObject.bytelength = ads.string(parseInt(check[1], 10));

//                 symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//                 continue;
//             }

//             // No basic Datatype, then we need to seek in Userdatatypes
//             let found = false;

//             let dttype = datatyps.find(dt => fromArr(dt.Name) === type);
//             if (dttype) {
//                 type = fromArr(dttype.Type);
//                 // the usertype can still be a knowntype e.g. an ENUM => TYPE INT
//                 // Is the Datatype a known basic Datatype then Create an Push Datapointobject to OutputArray
//                 if (type && knownDatatypes.includes(type)) {
//                     tempObject.bytelength = ads[type];

//                     symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//                     continue;
//                 }

//                 // Is the Datatype a String then Create an Push Datapointobject to OutputArray
//                 const check = type && type.match('^STRING\\(\\d+\\)$');
//                 if (check) {
//                     tempObject.bytelength = ads.string(parseInt(check[1], 10));

//                     symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//                     continue;
//                 }
//                 symbolObjectList = symbolObjectList.concat(createSymbolObjectList(adapter, datatyps, symbols, datatyps.indexOf(dttype), `${tempObject.symname}.`));
//             }
//             else {
//                 throw new Error(`Type (${fromArr(symbols[i].Type)}) not Found or not Supported!!`);
//             }
//         }

//         return symbolObjectList;
//     }

//     // Here we are in Level 2 or deeper in the Symbol Tree

//     // Found a Datatyp thats not a Struct
//     //adapter.log.info(JSON.stringify(datatyps[datatypeIndex]));
//     if (!Object.prototype.hasOwnProperty.call(datatyps[datatypeIndex], 'SubItem')) {
//         throw new Error(`Type (${datatyps[datatypeIndex].Name[0]._}) found but not Supported!!`);
//     }

//     const datatyp = datatyps[datatypeIndex].SubItem;
//     let offset = 0;
//     for (let i = 0; i < datatyp.length; i += 1) {
//         // When we found here some basic Datatypes -> Adding to Datapointarray with complete Path
//         let bitoffs = parseInt(datatyp[i].BitOffs[0]);
//         let bitsize = parseInt(datatyp[i].BitSize[0]);
//         if (offset != bitoffs) {
//             tempObject.symname = "";
//             tempObject.bytelength = (bitoffs - offset) / 8;
//             offset = bitoffs;
//             symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//         }
//         type = fromArr(datatyp[i].Type);
//         if (knownDatatypes.includes(type)) {
//             tempObject.symname = `${prefix}${fromArr(datatyp[i].Name)}`;

//             tempObject.bytelength = ads[datatyp[i].Type[0]];
//             offset += bitsize;
//             symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//             continue;
//         }

//         // When we found here some String -> Adding to Datapointarray with complete Path
//         if (datatyp[i].Type[0]._.match('^STRING\\(\\d+\\)$') || knownDatatypes.includes(datatyp[i].Type[0]._)) {
//             if (datatyp[i].Name[0]._) {
//                 tempObject.symname = `${prefix}${datatyp[i].Name[0]._}`;
//             } else {
//                 tempObject.symname = `${prefix}${datatyp[i].Name[0]}`;
//             }

//             const check = datatyp[i].Type[0]._.match('^STRING\\((\\d+)\\)$');
//             if (check) {
//                 tempObject.bytelength = ads.string(parseInt(check[1], 10));
//                 offset += bitsize;
//                 symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//                 continue;
//             }
//         }

//         // No basic Datatype so we have dive a Level deeper in the Tree...
//         let found = false;
//         let datatypetofind = fromArr(datatyp[i].Type);
//         const datatypearray = /^ARRAY \[(\d+)\.\.(\d+)\] OF (.+)$/.exec(datatypetofind);
//         if (datatypearray != null) datatypetofind = datatypearray[3];

//         dttype = datatyps.find(dt => fromArr(dt.Name) === datatypearray[3]);
//         if (dttype) {
//             if (datatypearray != null) {
//                 for (let z = parseInt(datatypearray[1]); z <= parseInt(datatypearray[2]); z++) {
//                     let size = bitsize / (parseInt(datatypearray[2]) - parseInt(datatypearray[1]) + 1);
//                     symbolObjectList = symbolObjectList.concat(createSymbolObjectList(adapter, datatyps, symbols, j, `${prefix}${datatyp[i].Name[0]}[${z}].`, size));
//                 }
//             } else {
//                 symbolObjectList = symbolObjectList.concat(createSymbolObjectList(adapter, datatyps, symbols, j, `${prefix}${datatyp[i].Name[0]}.`, bitsize));
//             }
//             offset += bitsize;
//             found = true;
//         }

//         // Userdatatype not found (normaly Impossible) or Basedatatype not supported then throw an Error
//         if (!found) {
//             throw new Error(`Type (${JSON.stringify(datatyp[i].Type[0])}) not Found or not Supported!!`);
//         }
//     }
//     if (typeof size != 'undefined' && size != offset) {
//         tempObject.symname = "";
//         tempObject.bytelength = (size - offset) / 8;
//         offset = size;
//         symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
//     }
//     return symbolObjectList;
// }

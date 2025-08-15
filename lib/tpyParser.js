const xml2js = require('xml2js');
const ads = require('node-ads-api');
const { parse, basename } = require('path');

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

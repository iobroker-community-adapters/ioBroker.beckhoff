const xml2js = require('xml2js');
const ads = require('node-ads-api');

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

      const filteredSymbols = [];

      for (let i = 0; i < symbols.length; i += 1) {
        let symName = '';

        if (symbols[i].Name[0]._) {
          symName = symbols[i].Name[0]._;
        } else {
          [symName] = symbols[i].Name;
        }

        if (
          symName.toLowerCase().indexOf(adapter.config.targetVTable.toLowerCase()) === 1 &&
          adapter.config.targetAmsPort === '901' // TC2
        ) {
          filteredSymbols.push(symbols[i]);
        }
      }

      if (filteredSymbols.length <= 0) {
        adapter.log.info(`No Variables in Table (${adapter.config.targetVTable}) are found in PLC. Please check your Tablename`);

        return;
      }

      try {
        adapter.config.symbolObjectList = createSymbolObjectList(dataTypes, filteredSymbols);
        emitter.emit('updateObjects');
      } catch (e) {
        adapter.log.warn(`Sync PLC Variables: ${e} Please Check your Variable Table and your Datatypes in PLC`);
      }
    }
  );
};

/**
 * Create a Array that contains a objects with a exact construction to use it with the node-ads-api Package
 *
 * @param   {array}     datatyps            List of all known Datatypes in PLC with Subdatatypelists
 * @param   {array}     symbols             SymbolList of all Symbols in PLC they are reachable over ADS
 * @param   {number}    [datatypeIndex]     Index of Datatype to find it in recusion fast and without seek
 * @param   {string}    [prefix]            Symbolprefix to walk trought the Symboltree of Symbollist of PLC
 * @returns {array}                         SymbolList for creating States in ioBroker and subscibe the Handles
 */
function createSymbolObjectList(datatyps, symbols, datatypeIndex, prefix) {
  const knownDatatypes = ['BOOL', 'BYTE', 'WORD', 'DWORD', 'SINT', 'USINT', 'INT', 'UINT', 'DINT', 'UDINT', 'REAL', 'STRING(80)'];

  const tempObject = {
    symname: '',
    bytelength: null,
    lastWriteTime: 0,
  };

  let symbolObjectList = [];

  // On first Call we have no prefix or datatypeIndex so we search on first Level in Symbol Tree
  if (!prefix || !datatypeIndex) {
    for (let i = 0; i < symbols.length; i += 1) {
      if (symbols[i].Name[0]._) {
        tempObject.symname = symbols[i].Name[0]._;
      } else {
        [tempObject.symname] = symbols[i].Name;
      }

      // Is the Datatype a known basic Datatype then Create an Push Datapointobject to OutputArray
      if (knownDatatypes.includes(symbols[i].Type[0])) {
        if (symbols[i].Name[0]._) {
          tempObject.symname = symbols[i].Name[0]._;
        } else {
          [tempObject.symname] = symbols[i].Name;
        }

        if (symbols[i].Type[0] === 'STRING(80)') {
          tempObject.bytelength = ads.STRING;
        } else {
          tempObject.bytelength = ads[symbols[i].Type[0]];
        }

        symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
        continue;
      }

      // No basic Datatype, then we need to seek in Userdatatypes
      let found = false;

      for (let j = 0; j < datatyps.length; j += 1) {
        // When a Userdataype is available proceed with the next Level in the Tree
        if (datatyps[j].Name[0]._ === symbols[i].Type[0]._) {
          symbolObjectList = symbolObjectList.concat(createSymbolObjectList(datatyps, symbols, j, `${tempObject.symname}.`));

          found = true;

          break;
        }
      }

      // Userdatatype not found (normaly Impossible) or Basedatatype not supported then throw an Error
      if (!found) {
        let symType = '';

        if (symbols[i].Type[0]._) {
          symType = symbols[i].Type[0]._;
        } else {
          [symType] = symbols[i].Type;
        }

        throw new Error(`Type (${symType}) not Found or not Supported!!`);
      }
    }

    return symbolObjectList;
  }

  // Here we are in Level 2 or deeper in the Symbol Tree

  // Found a Datatyp thats not a Struct
  if (!Object.prototype.hasOwnProperty.call(datatyps[datatypeIndex], 'SubItem')) {
    throw new Error(`Type (${datatyps[datatypeIndex].Name[0]._}) found but not Supported!!`);
  }

  const datatyp = datatyps[datatypeIndex].SubItem;

  for (let i = 0; i < datatyp.length; i += 1) {
    // When we found here some basic Datatypes -> Adding to Datapointarray with complete Path
    if (knownDatatypes.includes(datatyp[i].Type[0])) {
      tempObject.symname = `${prefix}${datatyp[i].Name[0]}`;

      if (datatyp[i].Type[0] === 'STRING(80)') {
        tempObject.bytelength = ads.STRING;
      } else {
        tempObject.bytelength = ads[datatyp[i].Type[0]];
      }

      symbolObjectList.push(JSON.parse(JSON.stringify(tempObject)));
      continue;
    }

    // No basic Datatype so we have dive a Level deeper in the Tree...
    let found = false;

    for (let j = 0; j < datatyps.length; j += 1) {
      if (datatyps[j].Name[0]._ === datatyp[i].Type[0]._) {
        symbolObjectList = symbolObjectList.concat(createSymbolObjectList(datatyps, symbols, j, `${prefix}${datatyp[i].Name[0]}.`));

        found = true;

        break;
      }
    }

    // Userdatatype not found (normaly Impossible) or Basedatatype not supported then throw an Error
    if (!found) {
      throw new Error(`Type (${JSON.stringify(datatyp[i].Type[0])}) not Found or not Supported!!`);
    }
  }

  return symbolObjectList;
}

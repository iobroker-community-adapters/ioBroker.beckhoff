const xml2js = require('xml2js');
const ads = require('node-ads-api');

/**
 * Read XML text with or without attributes, as produced by xml2js.
 *
 * @param {Array} field XML field.
 * @returns {string} Text content.
 */
function text(field) {
    return typeof field[0] === 'string' ? field[0] : field[0]._;
}

/**
 * Parse the configured legacy TPY document, retaining existing symbol names.
 *
 * @param {Record<string, any>} adapter Adapter with TPY data.
 * @returns {Promise<Array>} Selected symbol descriptors.
 */
module.exports = async adapter => {
    if (!adapter.config.xmlTpyData) {
        throw new Error('No TPY data configured. Upload a TPY file or paste its contents.');
    }
    const result = await xml2js.parseStringPromise(adapter.config.xmlTpyData, { normalize: true });
    const symbols = result.PlcProjectInfo.Symbols[0].Symbol;
    const datatypes = result.PlcProjectInfo.DataTypes[0].DataType;
    const prefix = `.${adapter.config.targetVTable}`.toLowerCase();
    const selected = symbols.filter(symbol => {
        const name = text(symbol.Name).toLowerCase();
        return !adapter.config.targetVTable || name.startsWith(prefix);
    });
    if (!selected.length) {
        throw new Error(`No variables found in TPY table (${adapter.config.targetVTable})`);
    }
    const basicTypes = [
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
    const output = [];
    const expand = (name, type, ancestors) => {
        const string = /^STRING\((\d+)\)$/.exec(type);
        if (string || basicTypes.includes(type)) {
            output.push({
                symname: name,
                bytelength: JSON.parse(JSON.stringify(string ? ads.string(Number(string[1])) : ads[type])),
                lastWriteTime: 0,
            });
            return;
        }
        if (ancestors.includes(type)) {
            throw new Error(`Recursive TPY type (${type}) is not supported`);
        }
        const datatype = datatypes.find(item => text(item.Name) === type);
        if (!datatype?.SubItem) {
            throw new Error(`Type (${type}) not found or not supported`);
        }
        for (const item of datatype.SubItem) {
            expand(`${name}.${text(item.Name)}`, text(item.Type), [...ancestors, type]);
        }
    };
    for (const symbol of selected) {
        expand(text(symbol.Name), text(symbol.Type), []);
    }
    return output;
};

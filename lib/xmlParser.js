
'use strict';

const xml2js = require('xml2js'),
    fs = require('fs');

/**
 * @returns {void}
 */
function xmlParser () {
    fs.readFile('../test/projectData.tpy', {'encoding': 'utf-8'}, (err, data) => {
        if (err) {
            console.error(err);

            return;
        }

        xml2js.parseString(
            data,
            {
                'parseBooleans': true,
                'parseNumbers': true,
                'normalize': true
            },
            (error, result) => {
                if (error) {
                    console.error(error);

                    return;
                }

                fs.writeFile('../test/jsonProjectData.json', JSON.stringify(result), (errorWrite) => {
                    if (errorWrite) {
                        console.error(errorWrite);
                    }
                });

                const symbols = result.PlcProjectInfo.Symbols[0].Symbol,
                    dataTypes = result.PlcProjectInfo.DataTypes[0].DataType;
            }
        );
    });
}

xmlParser();


'use strict';

const ads = require('node-ads-api'),
    workerAdapterToPlc = require('./workerAdapterToPlc');

/**
 * Every Symbol in Variabletable need to have a State in ioBroker. First delete all old and unnecessary and create all needed States.
 * After that register plc Handles to be notified when some Value on PLC get Changed
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @returns {void}
 */
module.exports = (adsC, adapter, emitter) => {
    adapter.getStatesOf(adapter.namespace, 'plc', (err, res) => {
        if (err) {
            adapter.log.warn(`Seeking States in 'PLC' occurred an Error: ${err}`);

            return;
        }

        // Seeking in States if there is some State that not anymore needed and then delete
        for (let i = 0; i < res.length; i++) {
            let found = false;

            const shortId = res[i]._id.replace(`${adapter.namespace}.`, '');    // eslint-disable-line no-underscore-dangle

            for (let j = 0; j < adapter.config.symbolObjectList.length; j++) {
                let symname = '';

                // TC2 needs the Point on TC3 don´t need it
                if (adapter.config.targetAmsPort === '801') {
                    symname = `plc${adapter.config.symbolObjectList[j].symname}`;
                } else {
                    symname = `plc.${adapter.config.symbolObjectList[j].symname}`;
                }

                if (symname === shortId) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                adapter.delObject(shortId);
            }
        }
    });

    adsC.releaseNotificationHandles(() => {
        // Create Notification Handle for Symboltable
        const symTableHandle = {
            'indexGroup': ads.ADSIGRP.SYM_VERSION,
            'indexOffset': 0,
            'bytelength': ads.BYTE
        };

        adsC.notify(symTableHandle);

        // Create for every Item in SymbolObject list a State in PLC Channel when its not already available
        for (let i = 0; i < adapter.config.symbolObjectList.length; i++) {
            const item = adapter.config.symbolObjectList[i];

            let symbolName = item.symname.substr(item.symname.lastIndexOf('.') + 1, item.symname.length);

            // For resync Symbol -> No State needed
            if (symbolName.toLowerCase() === 'iobrokerresync') {
                adsC.notify(item);

                continue;
            }

            symbolName = `${symbolName} [${item.bytelength.name}]`;

            let type = 'number';
            let def = 0;
            let role = 'level';

            if (item.bytelength.name === 'BOOL') {
                type = 'boolean';
                def = false;
                role = 'switch';
            }

            let statename = '';

            // TC2 needs the Point on TC3 don´t need it
            if (adapter.config.targetAmsPort === '801') {
                statename = `plc${item.symname}`;
            } else {
                statename = `plc.${item.symname}`;
            }

            adapter.setObjectNotExists(
                statename,
                {
                    'type': 'state',
                    'common': {
                        'name': symbolName,
                        'type': type,
                        'role': role,
                        'read': true,
                        'write': true,
                        'def': def
                    },
                    'native': {'bytelength': item.bytelength}
                },
                () => {
                    // When State is created then register handler for value changing on PLC
                    adsC.notify(item);

                    // Initial Sync
                    adapter.getState(statename, (err, state) => {
                        if (err) {
                            adapter.log.error(`Read States for Initial Sync occurred an Error: ${err}`);

                            return;
                        }

                        if (state.ack === false) {
                            workerAdapterToPlc(adsC, adapter, emitter, state, statename);
                        } else {
                            const plcHandle = {
                                'symname': item.symname,
                                'bytelength': item.bytelength,
                                'propname': 'value'
                            };

                            workerPlcToAdapterManual(adsC, adapter, emitter, plcHandle);
                        }
                    });
                }
            );
        }
    });
};


/**
 * Worker to write changes of Values from ioBroker to PLC
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @param   {object}    plcHandle   Object describes the PLC Handle to read correct Data from PLC
 * @returns {boolean}               StateId was related to this function.
 */
function workerPlcToAdapterManual (adsC, adapter, emitter, plcHandle) {
    adsC.read(plcHandle, (error, handle) => {
        if (error) {
            adapter.log.warn(`Read Symbol Value from PLC to ioBroker failed: ${error}`);
            emitter.emit('disconnecting');
        } else {
            if (handle.value === null) {
                return;
            }

            let statename = '';

            // TC2 have a Point on Globals TC3 don´t have
            if (adapter.config.targetAmsPort === '801') {
                statename = `plc${handle.symname}`;
            } else {
                statename = `plc.${handle.symname}`;
            }

            adapter.setState(statename, handle.value, true, (err) => {
                if (err) {
                    adapter.log.warn(`Read Symbol Value from PLC to ioBroker failed: ${err}`);
                    emitter.emit('disconnecting');
                } else {
                    adapter.log.debug(`Read Symbol Value from PLC to ioBroker: ${handle.symname} -> ${handle.value}`);

                    adapter
                        .config
                        .symbolObjectList
                        .find((x) => {
                            return x.symname === handle.symname;
                        })
                        .lastWriteTime = 0;
                }
            });
        }
    });
}

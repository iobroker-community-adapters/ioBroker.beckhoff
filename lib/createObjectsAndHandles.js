const ads = require('node-ads-api');

/**
 * Every Symbol in Variabletable need to have a State in ioBroker. First delete all old and unnecessary and create all needed States.
 * After that register plc Handles to be notified when some Value on PLC get Changed
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @returns {void}
 */
module.exports = (adsC, adapter) => {
    let waitForDeleteStates = 1;
    adapter.getStatesOf('plc', (err, res) => {
        if (err) {
            adapter.log.warn(`Seeking States in 'PLC' occurred an Error: ${err}`);

            waitForDeleteStates = 0;

            return;
        }

        adapter.log.debug(`PLC States received ${adapter.config.targetAmsPort}`);

        // Seeking in States if there is some State that not anymore needed and then delete
        for (let i = 0; i < res.length; i += 1) {
            const shortId = res[i]._id.replace(`${adapter.namespace}.`, ''); // eslint-disable-line no-underscore-dangle
            const v2prefix = adapter.config.targetAmsPort.indexOf('01') >= 1 ? 'plc' : 'plc.';
            const dataTypeId = res[i].native.symname.replace(v2prefix, '');
            const found = adapter.config.symbolObjectList.find(item => item.bytelength.find(p => p.symname === dataTypeId)) != null;

            if (!found) {
                waitForDeleteStates += 1;

                // eslint-disable-next-line no-loop-func
                adapter.delObject(shortId, {force:true}, error => {
                    waitForDeleteStates -= 1;

                    if (error) {
                        adapter.log.debug(`Can not delete unnessecary Object or with wrong Datatyp (${shortId}). Error: ${error}`);
                    } else {
                        adapter.log.debug(`Unnessecary Object or with wrong Datatyp deleted (${shortId}).`);
                    }
                });
            }
        }

        waitForDeleteStates -= 1;
    });

    (function waitingForDeleteStates(first) {
        if (waitForDeleteStates) {
            setTimeout(waitingForDeleteStates, 500);

            if (!first) {
                adapter.log.debug(`Wait for deleting old States. ${waitForDeleteStates} remaining.`);
            }
        } else {
            adapter.log.debug('Release all Notification Handles first.');

            adsC.releaseNotificationHandles(error => {
                if (error) {
                    adapter.log.warn(`Release Notification Handles failed: ${error}`);
                } else {
                    adapter.log.debug('All Notification Handles are released.');
                }

                if (adapter.config.targetAmsPort !== '901') {
                    // Create Notification Handle for Symboltable
                    const symTableHandle = {
                        indexGroup: ads.ADSIGRP.SYM_VERSION,
                        indexOffset: 0,
                        bytelength: ads.BYTE,
                    };

                    adsC.notify(symTableHandle, err => {
                        if (err) {
                            adapter.log.debug(`Subscription on Symboltablechange occure an Error: ${err}`);
                        } else {
                            adapter.log.debug('Subscription on Symboltablechange done.');
                        }
                    });
                }

                //as we create a structure with arrays and only want adsC to get top structure 
                // -> create all channels and states a priori
                let channelsToCreate = new Set();
                let valuesToCreate = [];

                // TC2 needs the Point on TC3 don´t need it
                let basename = 'plc';

                for(let item of adapter.config.symbolObjectList) 
                {
                    adapter.log.debug(`Create States: ${JSON.stringify(item)}`);
                    for (let prop of item.bytelength.filter(p => !/^padding\[\d+\]$/.exec(p.symname))) {
                        adapter.log.debug(`Create State: ${JSON.stringify(prop)}`);
                        const propparts = prop.symname.split('.').filter(part => part !== '');
                        let channelname = basename;
                        for (let j = 0; j < propparts.length - 1; j++) {
                            channelname += "." + propparts[j];
                            if (!channelsToCreate.has(channelname))
                                channelsToCreate.add(channelname);
                        }
                        valuesToCreate.push({...prop, symname:channelname + "." + propparts[propparts.length -1]});
                    }
                }

                adapter.log.debug(`Create Channels: ${channelsToCreate.size} ${JSON.stringify([...channelsToCreate])}`);
                adapter.log.debug(`Create States: ${valuesToCreate.size} ${JSON.stringify([...valuesToCreate])}`);

                // Create for every Item in SymbolObject list a State in PLC Channel when its not already available
                let i = 0;
                adapter.log.debug(`Create States for: ${JSON.stringify(adapter.config.symbolObjectList)}`);

                channelsToCreate = [...channelsToCreate];

                (function createStatesAndSubscribe() {
                    if (i >= adapter.config.symbolObjectList.length) {
                        return;
                    }

                    if (channelsToCreate.length > 0) {
                        const channel = channelsToCreate.shift();
                        adapter.log.debug(`Create Channel: ${channel}`);
                        adapter.setObjectNotExists(
                            channel.replace(/\[(\d+)\]/, '_$1_'),
                            {
                                type: 'channel',
                            },
                            () => {
                                createStatesAndSubscribe();
                            }
                        );
                        return;
                    }

                    if (valuesToCreate.length > 0) {
                        const value = valuesToCreate.shift();
                        let symbolName = value.symname.substr(value.symname.lastIndexOf('.') + 1);

                        if (value.name === 'STRING') {
                            symbolName = `${symbolName} [STRING(${value.length - 1})]`;
                        } else {
                            symbolName = `${symbolName} [${value.name}]`;
                        }

                        let type = 'number';
                        let def = 0;
                        let role = 'level';

                        if (value.name === 'BOOL') {
                            type = 'boolean';
                            def = false;
                            role = 'switch';
                        } else if (value.name === 'STRING') {
                            type = 'string';
                            def = '';
                            role = 'text';
                        } else if (['TIME', 'TIME_OF_DAY', 'TOD', 'DATE', 'DATE_AND_TIME', 'DT'].includes(value.name)) {
                            value.useLocalTimezone = false;
                            type = 'string';
                            def = '';
                            role = 'date';
                        }

                        adapter.log.debug(`Create State: ${JSON.stringify(value)}: ${type} ${role} ${def}`);
                        adapter.setObjectNotExists(
                            value.symname.replace(/\[(\d+)\]/, '_$1_'),
                            {
                                type: 'state',
                                common: {
                                    type,
                                    role,
                                    def,
                                    name: symbolName.replace(/\[(\d+)\]/, '_$1_'),
                                    read: true,
                                    write: true,
                                },
                                native: value,
                            },
                            () => {
                                createStatesAndSubscribe();
                            }
                        );
                        return;
                    }

                    const item = adapter.config.symbolObjectList[i];

                    // When State is created then register handler for value changing on PLC
                    adapter.log.debug(`Send Subscription for: ${item.symname} to PLC`);

                    adsC.notify(item, err => {
                        if (err) {
                            adapter.log.warn(`Subscription for: ${item.symname} occure an Error: ${err}`);
                        } else {
                            adapter.log.debug(`Subscription for: ${item.symname} done.`);
                        }

                        // Next State !!
                        i += 1;
                        createStatesAndSubscribe();
                    });
                })();
            });
        }
    })(true);
};

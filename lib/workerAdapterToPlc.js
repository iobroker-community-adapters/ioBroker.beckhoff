
'use strict';

/**
 * Worker to write changes of Values from ioBroker to PLC
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @param   {object}    state       Actual State Object which have fired a stateChangeEvent.
 * @param   {string}    id          ID String of the actual State that will be prcessed.
 * @returns {boolean}               StateId was related to this function.
 */
module.exports = (adsC, adapter, emitter, state, id) => {   // eslint-disable-line max-params
    // State was not related to this Function return immediately
    if (id.toLowerCase().indexOf(`${adapter.namespace}.plc.${adapter.config.targetVTable}`.toLowerCase()) !== 0) {
        return false;
    }

    // Only need to do something when the State is not Ack -> Changed on ioBroker
    if (state.ack) {
        return true;
    }

    adapter.getObject(id, (err, obj) => {
        if (err) {
            adapter.log.warn(`WorkerAdapterToPLC have Problems to read the State: ${err}`);
        }

        let symname = '';

        // TC2 needs the Point on TC3 don´t need it
        if (adapter.config.targetAmsPort === '801') {
            symname = id.substring(`${adapter.namespace}.plc`.length, id.length);
        } else {
            symname = id.substring(`${adapter.namespace}.plc.`.length, id.length);
        }

        const plcHandle = {
            'symname': symname,
            'bytelength': obj.native.bytelength,
            'propname': 'value',
            'value': state.val
        };

        adsC.write(plcHandle, (error) => {
            if (error) {
                adapter.log.warn(`Write Symbol Value from ioBroker to PLC failed: ${error}`);
                emitter.emit('disconnecting');
            } else {
                adapter.log.debug(`Write Symbol Value from ioBroker to PLC: ${plcHandle.symname} -> ${plcHandle.value}`);

                adapter
                    .config
                    .symbolObjectList
                    .find((x) => {
                        return x.symname === plcHandle.symname;
                    })
                    .lastWriteTime = new Date().getTime();
            }
        });
    });

    return true;
};

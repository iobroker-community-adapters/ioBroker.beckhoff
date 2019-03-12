
'use strict';

const ads = require('node-ads-api');

/**
 * Callback description
 *
 * @callback                stateCallback
 * @param       {boolean}   plcState     Is the PLC in Run State?
 */

/**
 * Checks if PLC is in Run State
 *
 * @param   {object}        adsC      adsClient Socket to PLC
 * @param   {object}        adapter   ioBroker Adapter Object to be able to use some Properties and some Methods from the Adapter
 * @param   {object}        emitter   EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @param   {stateCallback} cb        Callback when used on call.
 * @returns {void}
 */
module.exports = (adsC, adapter, emitter, cb) => {
    adsC.readState((err, res) => {
        if (err) {
            adapter.log.error(`ADS Client: ${err}`);
            emitter.emit('disconnecting');

            if (cb) {
                cb(false);
            }
        } else {
            if (res.adsState === ads.ADSSTATE.RUN) {
                adapter.setState('info.plcRun', true, true);

                if (cb) {
                    cb(true);
                }
            } else {
                adapter.setState('info.plcRun', false, true);

                if (cb) {
                    cb(false);
                }
            }

            adapter.log.debug(`State of PLC: ${ads.ADSSTATE.fromId(res.adsState)}`);
        }
    });
};

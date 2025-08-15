const ads = require('node-ads-api');

let tableVersion = -1;
let ioBrokerResync = -1;

/**
 * Register listener to write Value changes from PLC to ioBroker. Also take a look about resync of SymbolTable is needed
 *
 * @param   {object}    adsC        adsClient Socket to PLC
 * @param   {object}    adapter     ioBroker Adapter Object. To have access to some Properties and Methods of the Adapter Object.
 * @param   {object}    emitter     EventEmitter Object of Adapter to handle some Events in the entire Adapter Scope.
 * @returns {void}
 */
module.exports = (adsC, adapter, emitter) => {
  adsC.on('notification', handle => {
    // When SymbolTable Version has changed
    if (handle.indexGroup === ads.ADSIGRP.SYM_VERSION) {
      if (tableVersion !== handle.value && tableVersion !== -1) {
        emitter.emit('newSyncReq');
      }

      tableVersion = handle.value;

      return;
    }

    // or a iobrokerResync Symbol available and has a changed then trigger a Sync of SymbolTable
    const symbolName = handle.symname.substr(handle.symname.lastIndexOf('.') + 1, handle.symname.length).toLowerCase();

    if (symbolName === 'iobrokerresync') {
      if (ioBrokerResync !== handle.value && ioBrokerResync !== -1) {
        emitter.emit('newSyncReq');
      }

      ioBrokerResync = handle.value;

      return;
    }

    // Skip handles with Value 'null' -> Don´t know wy happen on Adapter stop ...
    if (handle.value === null) {
      return;
    }
    adapter.log.debug("received ads Values: " + JSON.stringify(handle));
    adapter.log.debug(handle.symname.lastIndexOf('.').toString());
    if (handle.symname.lastIndexOf('.') == 0) {
      const iterate = (obj, cb) => {
        const stack = [{ p: '', obj: obj }];
        while (stack?.length > 0) {
          const currentObj = stack.pop();
          Object.keys(currentObj.obj).forEach(key => {
            let p = currentObj.p + (Array.isArray(currentObj.obj) ? '[' + key + ']' : '.' + key);
            cb(p, currentObj.obj, key, currentObj.obj[key]);
            if (typeof currentObj.obj[key] === 'object' && !(currentObj.obj[key] instanceof Date)) {
              stack.push({ p: p, obj: currentObj.obj[key] });
            }
          });
        }
      };
      iterate(handle.value, (p, o, k, v) => {
        if (p != '') {
          if (v instanceof Date) {
            // iobroker wants the date and time to be of type String or Number. The PLC implementation would like a date
            // we make String, with Iso String everything is converted, so we remove iso characters
            v = v.toISOString().replace('T', ' ').replace('Z', '');
          } else {
            if (typeof v === 'object')
              return;
          }
          let dataobj = handle.bytelength[k];
          if (/^padding\[\d+\]$/.exec(dataobj.symname)) return;
          //const statename = `plc${p.replace(/\[(\d+)\]/, '_$1_')}`;
          const statename = `plc${dataobj.symname.replace(/\[(\d+)\]/, '_$1_')}`;
          if (typeof adapter.config.symbolObjectValues == 'undefined') {
            adapter.config.symbolObjectValues = {};
          }
          if (adapter.config.symbolObjectValues[dataobj.symname] !== v) {
            adapter.config.symbolObjectValues[dataobj.symname] = v;
            adapter.setState(statename, v, true, err => {
              if (err) {
                adapter.log.warn(`Read Symbol Value from PLC to ioBroker Failed: ${err}`);
                emitter.emit('newSyncReq');
              } else {
                adapter.log.debug(`Read Symbol Value from PLC to ioBroker: ${statename} -> ${v}`);
              }
            });
          }
        }
      });

      return;
    }

    if (handle.value instanceof Date) {
      // iobroker wants the date and time to be of type String or Number. The PLC implementation would like a date
      // we make String, with Iso String everything is converted, so we remove iso characters
      handle.value = handle.value.toISOString().replace('T', ' ').replace('Z', '');
    }

    let statename = '';

    // TC2 have a Point on Globals TC3 don´t have
    if (adapter.config.targetAmsPort.indexOf('01') >= 1) {
      statename = `plc${handle.symname.replace(/\[(\d+)\]/, '_$1_')}`;
    } else {
      statename = `plc.${handle.symname.replace(/\[(\d+)\]/, '_$1_')}`;
    }

    adapter.setState(statename, handle.value, true, err => {
      if (err) {
        adapter.log.warn(`Read Symbol Value from PLC to ioBroker Failed: ${err}`);
        emitter.emit('newSyncReq');
      } else {
        adapter.log.debug(`Read Symbol Value from PLC to ioBroker: ${handle.symname} -> ${handle.value}`);

        adapter.config.symbolObjectList.find(x => {
          return x.symname === handle.symname;
        }).lastWriteTime = 0;
      }
    });
  });
};

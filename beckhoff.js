
'use strict';

const utils = require(`${__dirname}/lib/utils.js`),
    plcConnection = require(`${__dirname}/lib/plcConnection.js`),
    events = require('events');

const emitter = new events.EventEmitter();

let adsClient = {};

const adapter = new utils.Adapter({
    'name': 'beckhoff',
    'ready': () => {
        plcConnection(adapter, emitter, (adsC) => {
            adsClient = adsC;
        });

        adapter.subscribeStates('*');
    },
    'unload': () => {
        adsClient.end();
        adapter.setState('info.connection', false, true);

        adapter.log.info('Stopped and Connection closed');
    }
});

// A subscribed object changes
adapter.on('objectChange', (id, obj) => {
    // Warning, obj can be null if it was deleted
    adapter.log.info(`objectChange ${id} ${JSON.stringify(obj)}`);
});

// A subscribed state changes
adapter.on('stateChange', (id, state) => {
    // Warning, state can be null if it was deleted
    adapter.log.info(`stateChange ${id} ${JSON.stringify(state)}`);

    // you can use the ack flag to detect if it is status (true) or command (false)
    if (state && !state.ack) {
        adapter.log.info('ack is not set!');
    }
});

// Some message was sent to adapter instance over message box.
adapter.on('message', (obj) => {
    if (typeof obj === 'object' && obj.message) {
        if (obj.command === 'send') {
            // e.g. send email or pushover or whatever
            adapter.log.info('send command');

            // Send response in callback if required
            if (obj.callback) adapter.sendTo(obj.from, obj.command, 'Message received', obj.callback);
        }
    }
});


function template () {
    // The adapters config (in the instance object everything under the attribute "native") is accessible via
    // adapter.config:
    adapter.log.info(`config test1: ${adapter.config.test2}`);
    adapter.log.info(`config test1: ${adapter.config.test2}`);
    adapter.log.info(`config mySelect: ${adapter.config.mySelect}`);


    /**
     *
     *      For every state in the system there has to be also an object of type state
     *
     *      Here a simple beckhoff for a boolean variable named "testVariable"
     *
     *      Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
     *
     */

    adapter.setObject('testVariable', {
        'type': 'state',
        'common': {
            'name': 'testVariable',
            'type': 'boolean',
            'role': 'indicator'
        },
        'native': {}
    });

    // in this beckhoff all states changes inside the adapters namespace are subscribed
    adapter.subscribeStates('*');


    /**
     *   setState examples
     *
     *   you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
     *
     */

    // the variable testVariable is set to true as command (ack=false)
    adapter.setState('testVariable', true);

    // same thing, but the value is flagged "ack"
    // ack should be always set to true if the value is received from or acknowledged from the target system
    adapter.setState('testVariable', {'val': true, 'ack': true});

    // same thing, but the state is deleted after 30s (getState will return null afterwards)
    adapter.setState('testVariable', {'val': true, 'ack': true, 'expire': 30});
}

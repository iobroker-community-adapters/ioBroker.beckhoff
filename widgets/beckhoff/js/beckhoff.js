/*
    ioBroker.beckhoff Widget-Set

    version: "0.5.0"

    Copyright 10.2015-2016 dkleber89 <dkleber@gmail.com>

*/
'use strict';

// add translations for edit mode
if (vis.editMode) {
    $.extend(true, systemDictionary, {
        'myColor': {'en': 'myColor', 'de': 'mainColor', 'ru': 'Мой цвет'},
        'myColor_tooltip': {
            'en': 'Description of\x0AmyColor',
            'de': 'Beschreibung von\x0AmyColor',
            'ru': 'Описание\x0AmyColor'
        },
        'htmlText': {'en': 'htmlText', 'de': 'htmlText', 'ru': 'htmlText'},
        'group_extraMyset': {'en': 'extraMyset', 'de': 'extraMyset', 'ru': 'extraMyset'},
        'extraAttr': {'en': 'extraAttr', 'de': 'extraAttr', 'ru': 'extraAttr'}
    });
}

// add translations for non-edit mode
$.extend(true, systemDictionary, {
    'Instance': {'en': 'Instance', 'de': 'Instanz', 'ru': 'Инстанция'}
});

// this code can be placed directly in beckhoff.html
vis.binds.beckhoff = {
    'version': '0.5.0',
    'showVersion': function () {
        if (vis.binds.beckhoff.version) {
            console.log(`Version beckhoff: ${vis.binds.beckhoff.version}`);
            vis.binds.beckhoff.version = null;
        }
    },
    'createWidget': function (widgetID, view, data, style) {
        const $div = $(`#${widgetID}`);
        // if nothing found => wait

        if (!$div.length) {
            return setTimeout(() => {
                vis.binds.beckhoff.createWidget(widgetID, view, data, style);
            }, 100);
        }

        let text = '';

        text += `OID: ${data.oid}</div><br>`;
        text += `OID value: <span class="myset-value">${vis.states[`${data.oid}.val`]}</span><br>`;
        text += `Color: <span style="color: ${data.myColor}">${data.myColor}</span><br>`;
        text += `extraAttr: ${data.extraAttr}<br>`;
        text += `Browser instance: ${vis.instance}<br>`;
        text += `htmlText: <textarea readonly style="width:100%">${data.htmlText || ''}</textarea><br>`;

        $(`#${widgetID}`).html(text);

        // subscribe on updates of value
        if (data.oid) {
            vis.states.bind(`${data.oid}.val`, (e, newVal, oldVal) => {
                $div.find('.beckhoff-value').html(newVal);
            });
        }
    }
};

vis.binds.beckhoff.showVersion();

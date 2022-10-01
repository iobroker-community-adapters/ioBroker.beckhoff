import { AdapterInstance } from '@iobroker/adapter-core';
import { AdsDatatyp, AdsSymbol } from 'node-ads';
import { PLC } from '../PLC';

export class DataStructure {
    private _adapter: AdapterInstance;
    private _plc: PLC;

    private _symbols?: AdsSymbol[] | null;
    private _datatypes?: AdsDatatyp[] | null;

    constructor(adapter: AdapterInstance, plc: PLC) {
        this._adapter = adapter;
        this._plc = plc;

        this._plc.on('connected', () => this.load());
    }

    private load() {}
}

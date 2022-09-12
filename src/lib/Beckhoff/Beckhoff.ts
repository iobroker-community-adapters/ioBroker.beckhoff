import { AdsClientConnectOptions } from 'node-ads';

export class Beckhoff {
    private adsClientConnectOptions: AdsClientConnectOptions;

    constructor(adsClientConnectOptions: AdsClientConnectOptions) {
        this.adsClientConnectOptions = adsClientConnectOptions;
    }
}

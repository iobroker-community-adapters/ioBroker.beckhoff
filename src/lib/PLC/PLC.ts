import { AdsClientConnectOptions } from 'node-ads';

export class PLC {
    private adsClientConnectOptions: AdsClientConnectOptions;
    // private adsClient: AdsClient;

    constructor(adsClientConnectOptions: AdsClientConnectOptions) {
        this.adsClientConnectOptions = adsClientConnectOptions;

        // this.adsClient = connect(this.adsClientConnectOptions, () => {
        //     this.adsClient.readDeviceInfo((err, result) => {
        //         console.log(err);
        //         console.log(result);
        //     });

        //     this.adsClient.end();
        // });
    }
}

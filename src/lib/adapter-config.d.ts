// This file extends the AdapterConfig type from "@types/iobroker"
import { AdsClientConnectOptions } from 'node-ads';

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
    namespace ioBroker {
        interface AdapterConfig {
            adsClientConnectOptions: AdsClientConnectOptions;
        }
    }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};

// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
    namespace ioBroker {
        interface AdapterConfig {
            reconnectInterval: number;
            sourceAmsNetId: string;
            sourceAmsPort: number;
            targetAmsNetId: string;
            targetAmsPort: number;
            targetHost: string;
            targetTcpPort: number;
            timeout: number;
        }
    }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};

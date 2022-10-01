import { AdapterInstance } from '@iobroker/adapter-core';
import EventEmitter from 'events';
import { AdsClient, AdsClientConnectOptions, AdsReadDeviceInfoResult, connect } from 'node-ads';

export class PLC extends EventEmitter {
    private _adapter: AdapterInstance;
    private _adsClientConnectOptions: AdsClientConnectOptions;
    private _reconnectInterval: number;

    private _adsClient: AdsClient;
    private _checkDeviceStateInterval: NodeJS.Timer | null = null;
    private _reconnectTimer: NodeJS.Timeout | null = null;
    private _connected = false;

    private _deviceInfo: AdsReadDeviceInfoResult | null = null;

    constructor(adapter: AdapterInstance, adsClientConnectOptions: AdsClientConnectOptions, reconnectInterval: number) {
        super();

        this._adapter = adapter;
        this._adsClientConnectOptions = adsClientConnectOptions;
        this._reconnectInterval = reconnectInterval;

        this._adapter.setState('info.connection', this.connected, true);

        this._adapter.log.info(`Connecting to "${this._adsClientConnectOptions.host}"`);

        this._adsClient = connect(
            {
                verbose: this._adapter.log.level === 'debug' ? 1 : this._adapter.log.level === 'silly' ? 2 : 0,
                ...this._adsClientConnectOptions,
            },
            () => this._onConnected(),
        );

        this._adsClient.on('timeout', (error) => {
            if (this._reconnectTimer) {
                clearTimeout(this._reconnectTimer);
                this._reconnectTimer = null;
            }

            this._adapter.log.error(`Timeout occured in AdsClient: ${error}`);

            this._onDisconnecting();
        });

        this._adsClient.on('error', (error) => {
            if (this._reconnectTimer) {
                clearTimeout(this._reconnectTimer);
                this._reconnectTimer = null;
            }

            this._adapter.log.error(`Error ocurred in AdsClient: ${error}`);

            this._onDisconnecting();
        });
    }

    public get connected(): boolean {
        return this._connected;
    }

    private set connected(connected: boolean) {
        this._connected = connected;

        if (connected) {
            this.emit('connected');
        }
    }

    public get deviceInfo(): AdsReadDeviceInfoResult | null {
        return this._deviceInfo;
    }

    private _onConnected(): void {
        this.connected = true;
        this._adapter.setState('info.connection', this.connected, true);

        this._adapter.log.info(`Connection to "${this._adsClientConnectOptions.host}" established`);

        const readDeviceInfo = (): void => {
            this._adsClient.readDeviceInfo((error, result) => {
                if (error) {
                    this._adapter.log.error(`Error on check Device state occurred: ${error}`);

                    this._onDisconnecting();
                }

                if (result) {
                    this._adapter.log.debug(`Received new device Info: ${JSON.stringify(result)}`);

                    this._deviceInfo = result;
                }
            });
        };

        readDeviceInfo();

        this._checkDeviceStateInterval = setInterval(readDeviceInfo, 10000);
    }

    private _onDisconnecting(): void {
        this._adapter.log.info(`Disconnect from "${this._adsClientConnectOptions.host}"`);
        if (this._checkDeviceStateInterval) {
            clearInterval(this._checkDeviceStateInterval);

            this._checkDeviceStateInterval = null;
        }

        this.connected = false;
        this._adapter.setState('info.connection', this.connected, true);
        this._deviceInfo = null;

        this._adsClient.releaseNotificationHandles(() => {
            this._adsClient.end(() => {
                this._adapter.log.debug(
                    `Disconnect from "${this._adsClientConnectOptions.host}" done, start reconnect timer`,
                );
                this._reconnect();
            });
        });
    }

    private _reconnect(): void {
        if (!this._reconnectTimer && !this.connected) {
            this._reconnectTimer = setTimeout(() => {
                if (!this.connected) {
                    this._adapter.log.info(`Connecting to "${this._adsClientConnectOptions.host}"`);
                    this._adsClient.connect(() => {
                        if (this._reconnectTimer) {
                            clearTimeout(this._reconnectTimer);
                            this._reconnectTimer = null;
                        }

                        this._onConnected();
                    });
                }
            }, this._reconnectInterval * 1000);
        }
    }

    public closeConnection(): Promise<void> {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this._adapter.log.error('Timeout closing AdsClient connection');
                reject();
            }, 2000);

            this._adapter.log.info('Close AdsClient connection');
            if (this._checkDeviceStateInterval) {
                clearInterval(this._checkDeviceStateInterval);
                this._checkDeviceStateInterval = null;
            }

            if (this._reconnectTimer) {
                clearTimeout(this._reconnectTimer);
                this._reconnectTimer = null;
            }

            if (this._adsClient) {
                this._adsClient.releaseNotificationHandles(() => {
                    this._adsClient.end(() => {
                        clearTimeout(timeout);
                        this._adapter.log.info('Close AdsClient connection done');
                        resolve();
                    });
                });
            }
        });
    }
}

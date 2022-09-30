"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var PLC_exports = {};
__export(PLC_exports, {
  PLC: () => PLC
});
module.exports = __toCommonJS(PLC_exports);
var import_node_ads = require("node-ads");
class PLC {
  constructor(adapter, adsClientConnectOptions, reconnectInterval) {
    this._checkDeviceStateInterval = null;
    this._reconnectTimer = null;
    this.connected = false;
    this.deviceInfo = null;
    this._adapter = { log: adapter.log, setState: adapter.setState };
    this._adsClientConnectOptions = adsClientConnectOptions;
    this._reconnectInterval = reconnectInterval;
    this._adapter.log.info(`Connecting to "${this._adsClientConnectOptions.host}"`);
    this._adsClient = (0, import_node_ads.connect)(
      {
        verbose: this._adapter.log.level === "debug" ? 1 : this._adapter.log.level === "silly" ? 2 : 0,
        ...this._adsClientConnectOptions
      },
      () => this._onConnected()
    );
    this._adsClient.on("timeout", (error) => {
      if (this._reconnectTimer) {
        clearTimeout(this._reconnectTimer);
        this._reconnectTimer = null;
      }
      this._adapter.log.error(`Timeout occured in AdsClient: ${error}`);
      this._onDisconnecting();
    });
    this._adsClient.on("error", (error) => {
      if (this._reconnectTimer) {
        clearTimeout(this._reconnectTimer);
        this._reconnectTimer = null;
      }
      this._adapter.log.error(`Error ocurred in AdsClient: ${error}`);
      this._onDisconnecting();
    });
  }
  _onConnected() {
    this.connected = true;
    this._adapter.setState("info.connection", this.connected, true);
    this._adapter.log.info(`Connection to "${this._adsClientConnectOptions.host}" established`);
    const readDeviceInfo = () => {
      this._adsClient.readDeviceInfo((error, result) => {
        if (error) {
          this._adapter.log.error(`Error on check Device state occurred: ${error}`);
          this._onDisconnecting();
        }
        if (result) {
          this._adapter.log.debug(`Received new device Info: ${JSON.stringify(result)}`);
          this.deviceInfo = result;
        }
      });
    };
    readDeviceInfo();
    this._checkDeviceStateInterval = setInterval(readDeviceInfo, 5e3);
  }
  _onDisconnecting() {
    this._adapter.log.info(`Disconnect from "${this._adsClientConnectOptions.host}"`);
    if (this._checkDeviceStateInterval) {
      clearInterval(this._checkDeviceStateInterval);
      this._checkDeviceStateInterval = null;
    }
    this.connected = false;
    this._adapter.setState("info.connection", this.connected, true);
    this.deviceInfo = null;
    this._adsClient.end(() => {
      this._adapter.log.debug(
        `Disconnect from "${this._adsClientConnectOptions.host}" done, start reconnect timer`
      );
      this._reconnect();
    });
  }
  _reconnect() {
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
      }, this._reconnectInterval * 1e3);
    }
  }
  closeConnection() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this._adapter.log.error("Timeout closing AdsClient connection");
        reject();
      }, 2e3);
      this._adapter.log.info("Close AdsClient connection");
      if (this._checkDeviceStateInterval) {
        clearInterval(this._checkDeviceStateInterval);
        this._checkDeviceStateInterval = null;
      }
      if (this._reconnectTimer) {
        clearTimeout(this._reconnectTimer);
        this._reconnectTimer = null;
      }
      if (this._adsClient) {
        this._adsClient.end(() => {
          clearTimeout(timeout);
          this._adapter.log.info("Close AdsClient connection done");
          resolve();
        });
      }
    });
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PLC
});
//# sourceMappingURL=PLC.js.map

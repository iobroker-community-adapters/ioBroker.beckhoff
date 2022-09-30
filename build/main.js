"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var utils = __toESM(require("@iobroker/adapter-core"));
var import_PLC = require("./lib/PLC");
class Beckhoff extends utils.Adapter {
  constructor(options = {}) {
    super({
      ...options,
      name: "beckhoff"
    });
    this._plc = null;
    this.on("ready", this.onReady.bind(this));
    this.on("stateChange", this.onStateChange.bind(this));
    this.on("unload", this.onUnload.bind(this));
  }
  async onReady() {
    this._plc = new import_PLC.PLC(
      this,
      {
        host: this.config.targetHost,
        port: this.config.targetTcpPort,
        amsNetIdTarget: this.config.targetAmsNetId,
        amsPortTarget: this.config.targetAmsPort,
        amsNetIdSource: this.config.sourceAmsNetId,
        amsPortSource: this.config.sourceAmsPort,
        timeout: this.config.timeout
      },
      this.config.reconnectInterval
    );
  }
  async onUnload(callback) {
    try {
      if (this._plc) {
        await this._plc.closeConnection();
      }
      callback();
    } catch (e) {
      callback();
    }
  }
  onStateChange(id, state) {
    if (state) {
      this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
    } else {
      this.log.info(`state ${id} deleted`);
    }
  }
}
if (require.main !== module) {
  module.exports = (options) => new Beckhoff(options);
} else {
  (() => new Beckhoff())();
}
//# sourceMappingURL=main.js.map

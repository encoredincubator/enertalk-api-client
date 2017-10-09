"use strict";

module.exports = {
  devicesInSite: function devicesInSite(siteId) {
    return "sites/" + siteId + "/devices";
  },
  device: function device(deviceId) {
    return "devices/" + deviceId;
  }
};
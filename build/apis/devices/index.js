'use strict';

var endpoint = require('./endpoint');

var devices = {
  listDevicesOfSite: function listDevicesOfSite(siteId) {
    return this.get(endpoint.devicesInSite(siteId));
  },
  createDevice: function createDevice(siteId, data) {
    return this.post(endpoint.devicesInSite(siteId), data || {});
  },
  getDevice: function getDevice(deviceId) {
    return this.get(endpoint.device(deviceId));
  },
  updateDevice: function updateDevice(deviceId, data) {
    return this.patch(endpoint.device(deviceId), data || {});
  },
  replaceDevice: function replaceDevice(deviceId, data) {
    return this.put(endpoint.device(deviceId), data || {});
  },
  deleteDevice: function deleteDevice(deviceId) {
    return this.delete(endpoint.device(deviceId));
  }
};

module.exports = devices;
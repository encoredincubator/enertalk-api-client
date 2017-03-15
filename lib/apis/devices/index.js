const endpoint = require('./endpoint');

const devices = {
  listDevicesOfSite(siteId) {
    return this.get(endpoint.devicesInSite(siteId));
  },
  createDevice(siteId, data) {
    return this.post(endpoint.devicesInSite(siteId), data || {});
  },
  getDevice(deviceId) {
    return this.get(endpoint.device(deviceId));
  },
  updateDevice(deviceId, data) {
    return this.patch(endpoint.device(deviceId), data || {});
  },
  replaceDevice(deviceId, data) {
    return this.put(endpoint.device(deviceId), data || {});
  },
  deleteDevice(deviceId) {
    return this.delete(endpoint.device(deviceId));
  },
};

module.exports = devices;

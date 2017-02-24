const endpoint = require('./endpoint');

class Devices {
  constructor(axios) {
    this.axios = axios;
  }

  listDevicesOfSite(siteId) {
    return this.axios.get(endpoint.devicesInSite(siteId));
  }

  createDevice(siteId, data = {}) {
    return this.axios.post(endpoint.devicesInSite(siteId), data);
  }

  getDevice(deviceId) {
    return this.axios.get(endpoint.device(deviceId));
  }

  updateDevice(deviceId, data = {}) {
    return this.axios.patch(endpoint.device(deviceId), data);
  }

  replaceDevice(deviceId, data = {}) {
    return this.axios.put(endpoint.device(deviceId), data);
  }

  deleteDevice(deviceId) {
    return this.axios.delete(endpoint.device(deviceId));
  }

}

module.exports = Devices;

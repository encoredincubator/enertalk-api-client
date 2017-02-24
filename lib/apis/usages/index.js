const endpoint = require('./endpoint');

class Usages {
  constructor(axios) {
    this.axios = axios;
  }

  periodicUsagesBySite(siteId, params = {}) {
    return this.axios.get(endpoints.periodicUsagesBySite(siteId), { params });
  }

  periodicUsagesByTag(siteId, tagId, params = {}) {
    return this.axios.get(endpoints.periodicUsagesByTag(siteId, tagId), { params });
  }

  periodicUsagesByDevice(deviceId, params = {}) {
    return this.axios.get(endpoints.periodicUsagesByDevice(deviceId), { params });
  }

  periodicUsagesByDeviceWithChannels(deviceId, params = {}) {
    return this.axios.get(endpoints.periodicUsagesByDeviceWithChannels(deviceId), { params });
  }

  billingUsagesBySite(siteId, params = {}) {
    return this.axios.get(endpoints.billingUsagesBySite(siteId), { params });
  }

  billingUsagesByTag(siteId, tagId, params = {}) {
    return this.axios.get(endpoints.billingUsagesByTag(siteId, tagId), { params });
  }

  billingUsagesByDevice(deviceId, params = {}) {
    return this.axios.get(endpoints.billingUsagesByDevice(deviceId), { params });
  }

  billingUsagesByDeviceWithChannels(deviceId, params = {}) {
    return this.axios.get(endpoints.billingUsagesByDeviceWithChannels(deviceId), { params });
  }

  realtimeUsagesBySite(siteId) {
    return this.axios.get(endpoints.realtimeUsagesBySite(siteId));
  }

  realtimeUsagesByTag(siteId, tagId) {
    return this.axios.get(endpoints.realtimeUsagesByTag(siteId, tagId));
  }

  realtimeUsagesByDevice(deviceId) {
    return this.axios.get(endpoints.realtimeUsagesByDevice(deviceId));
  }

  realtimeUsagesByDeviceWithChannels(deviceId) {
    return this.axios.get(endpoints.realtimeUsagesByDeviceWithChannels(deviceId));
  }
}

module.exports = Usages;

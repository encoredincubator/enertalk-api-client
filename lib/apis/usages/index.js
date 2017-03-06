const endpoint = require('./endpoint');

const usages = {
  periodicUsagesBySite(siteId, params = {}) {
    return this.get(endpoint.periodicUsagesBySite(siteId), { params });
  },
  periodicUsagesByTag(siteId, tagId, params = {}) {
    return this.get(endpoint.periodicUsagesByTag(siteId, tagId), { params });
  },
  periodicUsagesByDevice(deviceId, params = {}) {
    return this.get(endpoint.periodicUsagesByDevice(deviceId), { params });
  },
  periodicUsagesByDeviceWithChannels(deviceId, params = {}) {
    return this.get(endpoint.periodicUsagesByDeviceWithChannels(deviceId), { params });
  },
  billingUsagesBySite(siteId, params = {}) {
    return this.get(endpoint.billingUsagesBySite(siteId), { params });
  },
  billingUsagesByTag(siteId, tagId, params = {}) {
    return this.get(endpoint.billingUsagesByTag(siteId, tagId), { params });
  },
  billingUsagesByDevice(deviceId, params = {}) {
    return this.get(endpoint.billingUsagesByDevice(deviceId), { params });
  },
  billingUsagesByDeviceWithChannels(deviceId, params = {}) {
    return this.get(endpoint.billingUsagesByDeviceWithChannels(deviceId), { params });
  },
  realtimeUsagesBySite(siteId) {
    return this.get(endpoint.realtimeUsagesBySite(siteId));
  },
  realtimeUsagesByTag(siteId, tagId) {
    return this.get(endpoint.realtimeUsagesByTag(siteId, tagId));
  },
  realtimeUsagesByDevice(deviceId) {
    return this.get(endpoint.realtimeUsagesByDevice(deviceId));
  },
  realtimeUsagesByDeviceWithChannels(deviceId) {
    return this.get(endpoint.realtimeUsagesByDeviceWithChannels(deviceId));
  },
};

module.exports = usages;

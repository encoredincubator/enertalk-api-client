'use strict';

var endpoint = require('./endpoint');

var usages = {
  periodicUsagesBySite: function periodicUsagesBySite(siteId, params) {
    return this.get(endpoint.periodicUsagesBySite(siteId), { params: params });
  },
  periodicUsagesByTag: function periodicUsagesByTag(siteId, tagId, params) {
    return this.get(endpoint.periodicUsagesByTag(siteId, tagId), { params: params });
  },
  periodicUsagesByDevice: function periodicUsagesByDevice(deviceId, params) {
    return this.get(endpoint.periodicUsagesByDevice(deviceId), { params: params });
  },
  periodicUsagesByDeviceWithChannels: function periodicUsagesByDeviceWithChannels(deviceId, params) {
    return this.get(endpoint.periodicUsagesByDeviceWithChannels(deviceId), { params: params });
  },
  billingUsagesBySite: function billingUsagesBySite(siteId, params) {
    return this.get(endpoint.billingUsagesBySite(siteId), { params: params });
  },
  billingUsagesByTag: function billingUsagesByTag(siteId, tagId, params) {
    return this.get(endpoint.billingUsagesByTag(siteId, tagId), { params: params });
  },
  billingUsagesByDevice: function billingUsagesByDevice(deviceId, params) {
    return this.get(endpoint.billingUsagesByDevice(deviceId), { params: params });
  },
  billingUsagesByDeviceWithChannels: function billingUsagesByDeviceWithChannels(deviceId, params) {
    return this.get(endpoint.billingUsagesByDeviceWithChannels(deviceId), { params: params });
  },
  realtimeUsagesBySite: function realtimeUsagesBySite(siteId) {
    return this.get(endpoint.realtimeUsagesBySite(siteId));
  },
  realtimeUsagesByTag: function realtimeUsagesByTag(siteId, tagId) {
    return this.get(endpoint.realtimeUsagesByTag(siteId, tagId));
  },
  realtimeUsagesByDevice: function realtimeUsagesByDevice(deviceId) {
    return this.get(endpoint.realtimeUsagesByDevice(deviceId));
  },
  realtimeUsagesByDeviceWithChannels: function realtimeUsagesByDeviceWithChannels(deviceId) {
    return this.get(endpoint.realtimeUsagesByDeviceWithChannels(deviceId));
  }
};

module.exports = usages;
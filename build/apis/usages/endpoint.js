"use strict";

module.exports = {
  periodicUsagesBySite: function periodicUsagesBySite(siteId) {
    return "/sites/" + siteId + "/usages/periodic";
  },
  periodicUsagesByTag: function periodicUsagesByTag(siteId, tagId) {
    return "/sites/" + siteId + "/tags/" + tagId + "/usages/periodic";
  },
  periodicUsagesByDevice: function periodicUsagesByDevice(deviceId) {
    return "/devices/" + deviceId + "/usages/periodic";
  },
  periodicUsagesByDeviceWithChannels: function periodicUsagesByDeviceWithChannels(deviceId) {
    return "/devices/" + deviceId + "/channels/usages/periodic";
  },
  billingUsagesBySite: function billingUsagesBySite(siteId) {
    return "/sites/" + siteId + "/usages/billing";
  },
  billingUsagesByTag: function billingUsagesByTag(siteId, tagId) {
    return "/sites/" + siteId + "/tags/" + tagId + "/usages/billing";
  },
  billingUsagesByDevice: function billingUsagesByDevice(deviceId) {
    return "/devices/" + deviceId + "/usages/billing";
  },
  billingUsagesByDeviceWithChannels: function billingUsagesByDeviceWithChannels(deviceId) {
    return "/devices/" + deviceId + "/channels/usages/billing";
  },
  realtimeUsagesBySite: function realtimeUsagesBySite(siteId) {
    return "/sites/" + siteId + "/usages/realtime";
  },
  realtimeUsagesByTag: function realtimeUsagesByTag(siteId, tagId) {
    return "/sites/" + siteId + "/tags/" + tagId + "/usages/realtime";
  },
  realtimeUsagesByDevice: function realtimeUsagesByDevice(deviceId) {
    return "/devices/" + deviceId + "/usages/realtime";
  },
  realtimeUsagesByDeviceWithChannels: function realtimeUsagesByDeviceWithChannels(deviceId) {
    return "/devices/" + deviceId + "/channels/usages/realtime";
  }
};
module.exports = {
  periodicUsagesBySite(siteId) {
    return `/sites/${siteId}/usages/periodic`;
  },
  periodicUsagesByTag(siteId, tagId) {
    return `/sites/${siteId}/tags/${tagId}/usages/periodic`;
  },
  periodicUsagesByDevice(deviceId) {
    return `/devices/${deviceId}/usages/periodic`;
  },
  periodicUsagesByDeviceWithChannels(deviceId) {
    return `/devices/${deviceId}/channels/usages/periodic`;
  },

  billingUsagesBySite(siteId) {
    return `/sites/${siteId}/usages/billing`;
  },
  billingUsagesByTag(siteId, tagId) {
    return `/sites/${siteId}/tags/${tagId}/usages/billing`;
  },
  billingUsagesByDevice(deviceId) {
    return `/devices/${deviceId}/usages/billing`;
  },
  billingUsagesByDeviceWithChannels(deviceId) {
    return `/devices/${deviceId}/channels/usages/billing`;
  },

  realtimeUsagesBySite(siteId) {
    return `/sites/${siteId}/usages/realtime`;
  },
  realtimeUsagesByTag(siteId, tagId) {
    return `/sites/${siteId}/tags/${tagId}/usages/realtime`;
  },
  realtimeUsagesByDevice(deviceId) {
    return `/devices/${deviceId}/usages/realtime`;
  },
  realtimeUsagesByDeviceWithChannels(deviceId) {
    return `/devices/${deviceId}/channels/usages/realtime`;
  },


}

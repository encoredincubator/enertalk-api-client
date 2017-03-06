module.exports = {
  devicesInSite(siteId) {
    return `sites/${siteId}/devices`;
  },

  device(deviceId) {
    return `devices/:deviceId`;
  },
}

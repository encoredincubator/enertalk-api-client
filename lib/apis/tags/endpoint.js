module.exports = {
  listTagInSite(siteId) {
    return `/sites/${siteId}/tags`;
  },

  tag(siteId, tagId) {
    return `/sites/${siteId}/tags/${tagId}`;
  },

  tagInDevice(tagId, deviceId) {
    return `/tags/${tagId}/devices/${deviceId}`;
  }
}

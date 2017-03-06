const endpoint = require('./endpoint');

const tags = {
  createTag(siteId, data = {}) {
    return this.post(endpoint.listTagInSite(siteId), data);
  },
  listTags(siteId) {
    return this.get(endpoint.listTagInSite(siteId));
  },
  getTag(siteId, tagId) {
    return this.get(endpoint.tag(siteId, tagId));
  },
  updateTag(siteId, tagId, data = {}) {
    return this.patch(endpoint.tag(siteId, tagId), data);
  },
  deleteTag(siteId, tagId) {
    return this.delete(endpoint.tag(siteId, tagId));
  },
  tagDeviceOrChannel(tagId, deviceId, data = {}) {
    return this.patch(endpoint.tagInDevice(tagId, deviceId), data);
  },
};

module.exports = tags;

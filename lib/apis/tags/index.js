const endpoint = require('./endpoint');

class Tags {
  constructor(axios) {
    this.axios = axios;
  }

  createTag(siteId, data = {}) {
    return this.axios.post(endpoint.listTagInSite(siteId), data);
  }

  listTags(siteId) {
    return this.axios.get(endpoint.listTagInSite(siteId));
  }

  getTag(siteId, tagId) {
    return this.axios.get(endpoint.tag(siteId, tagId));
  }

  updateTag(siteId, tagId, data = {}) {
    return this.axios.patch(endpoint.tag(siteId, tagId), data);
  }

  deleteTag(siteId, tagId) {
    return this.axios.delete(endpoint.tag(siteId, tagId));
  }

  tagDeviceOrChannel(tagId, deviceId, data = {}) {
    return this.axios.patch(endpoint.tagInDevice(tagId, deviceId), data);
  }
}

module.exports = Tags;

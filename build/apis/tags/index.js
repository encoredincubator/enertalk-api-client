'use strict';

var endpoint = require('./endpoint');

var tags = {
  createTag: function createTag(siteId, data) {
    return this.post(endpoint.listTagInSite(siteId), data || {});
  },
  listTags: function listTags(siteId) {
    return this.get(endpoint.listTagInSite(siteId));
  },
  getTag: function getTag(siteId, tagId) {
    return this.get(endpoint.tag(siteId, tagId));
  },
  updateTag: function updateTag(siteId, tagId, data) {
    return this.patch(endpoint.tag(siteId, tagId), data || {});
  },
  deleteTag: function deleteTag(siteId, tagId) {
    return this.delete(endpoint.tag(siteId, tagId));
  },
  tagDeviceOrChannel: function tagDeviceOrChannel(tagId, deviceId, data) {
    return this.patch(endpoint.tagInDevice(tagId, deviceId), data || {});
  }
};

module.exports = tags;
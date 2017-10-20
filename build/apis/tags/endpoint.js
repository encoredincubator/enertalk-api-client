"use strict";

module.exports = {
  listTagInSite: function listTagInSite(siteId) {
    return "/sites/" + siteId + "/tags";
  },
  tag: function tag(siteId, tagId) {
    return "/sites/" + siteId + "/tags/" + tagId;
  },
  tagInDevice: function tagInDevice(tagId, deviceId) {
    return "/tags/" + tagId + "/devices/" + deviceId;
  }
};
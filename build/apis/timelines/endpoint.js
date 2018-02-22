"use strict";

module.exports = {
  timelines: function timelines(siteId) {
    return "/1.2/sites/" + siteId + "/timelines";
  },
  timeline: function timeline(siteId, timelineId) {
    return "/1.2/sites/" + siteId + "/timelines/" + timelineId;
  }
};
'use strict';

var endpoint = require('./endpoint');

var timelines = {
  timelines: function timelines(siteId, params) {
    return this.get(endpoint.timelines(siteId), { params: params });
  },
  updateTimeline: function updateTimeline(siteId, timelineId, data) {
    return this.put(endpoint.timeline(siteId, timelineId), data || {});
  }
};

module.exports = timelines;
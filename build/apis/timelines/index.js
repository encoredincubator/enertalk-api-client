'use strict';

var endpoint = require('./endpoint');

var timelines = {
  timelines: function timelines(registrationId, params) {
    return this.get(endpoint.timelines(registrationId), { params: params });
  },
  updateTimeline: function updateTimeline(registrationId, timelineId, data) {
    return this.put(endpoint.timeline(registrationId, timelineId), data || {});
  }
};

module.exports = timelines;
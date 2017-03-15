const endpoint = require('./endpoint');

const timelines = {
  timelines(registrationId, params) {
    return this.get(endpoint.timelines(registrationId), { params });
  },
  updateTimeline(registrationId, timelineId, data) {
    return this.put(endpoint.timeline(registrationId, timelineId), data || {});
  },
};

module.exports = timelines;

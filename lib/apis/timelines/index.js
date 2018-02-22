const endpoint = require('./endpoint');

const timelines = {
  timelines(registrationId, params) {
    return this.get(endpoint.timelines(registrationId), { params });
  },
  updateTimeline(registrationId, timelineId, data) {
    return this.put(endpoint.timeline(registrationId, timelineId), data || {});
  },
  timelinesBySite(siteId, params) {
    return this.get(endpoint.timelinesBySite(siteId), { params });
  },
  updateTimelineBySite(siteId, timelineId, data) {
    return this.put(endpoint.timelineBySite(siteId, timelineId), data || {});
  },
};

module.exports = timelines;

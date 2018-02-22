const endpoint = require('./endpoint');

const timelines = {
  timelines(siteId, params) {
    return this.get(endpoint.timelines(siteId), { params });
  },
  updateTimeline(siteId, timelineId, data) {
    return this.put(endpoint.timeline(siteId, timelineId), data || {});
  },
};

module.exports = timelines;

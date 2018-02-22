module.exports = {
  timelines(siteId) {
    return `/1.2/sites/${siteId}/timelines`;
  },
  timeline(siteId, timelineId) {
    return `/1.2/sites/${siteId}/timelines/${timelineId}`;
  },
}

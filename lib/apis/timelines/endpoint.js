module.exports = {
  timelines(registrationId) {
    return `/1.2/devices/${registrationId}/timelines`;
  },
  timeline(registrationId, timelineId) {
    return `/1.2/devices/${registrationId}/timelines/${timelineId}`;
  },
}

"use strict";

module.exports = {
  timelines: function timelines(registrationId) {
    return "/1.2/devices/" + registrationId + "/timelines";
  },
  timeline: function timeline(registrationId, timelineId) {
    return "/1.2/devices/" + registrationId + "/timelines/" + timelineId;
  }
};
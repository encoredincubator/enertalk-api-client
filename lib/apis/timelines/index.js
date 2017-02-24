const endpoint = require('./endpoint');

class Timelines {
  constructor(axios) {
    this.axios = axios;
  }

  timelines(registrationId, params = {}) {
    return this.axios.get(endpoints.timelines(registrationId), { params });
  }

  updateTimeline(registrationId, timelineId, data = {}) {
    return this.axios.put(endpoints.timeline(registrationId, timelineId), data);
  }
}

module.exports = Timelines;

const endpoint = require('./endpoint');

const push = {
  registerPushId(data) {
    return this.post(endpoint.pushInfo, data || {});
  },
  getPushInfo(params) {
    return this.get(endpoint.pushInfo, params || {});
  },
  updatePushStates(data) {
    return this.patch(endpoint.listPushInfoInSite, data || {});
  },
  getPushStates() {
    return this.get(endpoint.listPushInfoInSite);
  },
  resetPushToken(params) {
    return this.delete(endpoint.pushInfo, params || {});
  },  
};

module.exports = push;

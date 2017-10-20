'use strict';

var endpoint = require('./endpoint');

var push = {
  registerPushId: function registerPushId(data) {
    return this.post(endpoint.pushInfo, data || {});
  },
  getPushInfo: function getPushInfo(params) {
    return this.get(endpoint.pushInfo, params || {});
  },
  updatePushStates: function updatePushStates(data) {
    return this.patch(endpoint.listPushInfoInSite, data || {});
  },
  getPushStates: function getPushStates() {
    return this.get(endpoint.listPushInfoInSite);
  }
};

module.exports = push;
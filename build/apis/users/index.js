'use strict';

var endpoint = require('./endpoint');

var users = {
  getUser: function getUser() {
    return this.get(endpoint.me);
  },
  updateUser: function updateUser(data) {
    return this.patch(endpoint.me, data || {});
  }
};

module.exports = users;
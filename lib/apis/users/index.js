const endpoint = require('./endpoint');

const users = {
  getUser() {
    return this.get(endpoint.me);
  },
  updateUser(data = {}) {
    return this.patch(endpoint.me, data)
  },
};

module.exports = users;

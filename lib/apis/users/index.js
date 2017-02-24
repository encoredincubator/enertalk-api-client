const endpoint = require('./endpoint');

class Users {
  constructor(axios) {
    this.axios = axios;
  }

  getUser() {
    return this.axios.get(endpoints.me);
  }

  updateUser(data = {}) {
    return this.axios.patch(endpoints.me, data)
  }
}

module.exports = Users;

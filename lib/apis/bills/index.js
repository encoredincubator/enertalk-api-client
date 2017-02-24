const endpoint = require('./endpoint');

class Bill {
  constructor(axios) {
    this.axios = axios;
  }

  getBills(siteId) {
    return this.axios.get(endpoint.getBills(siteId));
  }

  getSuppliers() {
    return this.axios.get(endpoint.getSuppliers);
  }

  getRatePlanSchema(siteId, ratePlanId) {
    return this.axios.get(endpoint.getRatePlanSchema(siteId, ratePlanId));
  }
}

module.exports = Bill;

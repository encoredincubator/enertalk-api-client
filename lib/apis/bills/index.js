const endpoint = require('./endpoint');

const bills = {
  getBills(siteId) {
    return this.get(endpoint.getBills(siteId));
  },
  getSuppliers() {
    return this.get(endpoint.getSuppliers);
  },
  getRatePlanSchema(siteId, ratePlanId) {
    return this.get(endpoint.getRatePlanSchema(siteId, ratePlanId));
  },
};

module.exports = bills;

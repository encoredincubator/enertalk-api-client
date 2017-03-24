const endpoint = require('./endpoint');

const bills = {
  getBills(siteId) {
    return this.get(endpoint.getBills(siteId));
  },
  getSuppliers(params) {
    return this.get(endpoint.getSuppliers, params || {});
  },
  getRatePlanSchema(siteId, ratePlanId) {
    return this.get(endpoint.getRatePlanSchema(siteId, ratePlanId));
  },
  updateBills(siteId, data) {
    return this.patch(endpoint.getBills(siteId), data || {});
  },
};

module.exports = bills;

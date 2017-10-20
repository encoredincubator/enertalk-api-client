'use strict';

var endpoint = require('./endpoint');

var bills = {
  getBills: function getBills(siteId) {
    return this.get(endpoint.getBills(siteId));
  },
  getSuppliers: function getSuppliers(params) {
    return this.get(endpoint.getSuppliers, params || {});
  },
  getRatePlanSchema: function getRatePlanSchema(siteId, ratePlanId) {
    return this.get(endpoint.getRatePlanSchema(siteId, ratePlanId));
  },
  updateBills: function updateBills(siteId, data) {
    return this.patch(endpoint.getBills(siteId), data || {});
  }
};

module.exports = bills;
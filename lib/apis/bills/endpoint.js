module.exports = {
  getBills(siteId) {
    return `/sites/${siteId}/bills`;
  },

  getSuppliers: '/suppliers',

  getRatePlanSchema(supplierId, ratePlanId) {
    return `/suppliers/${supplierId}/rateplans/${ratePlanId}/schema`;
  },  
}

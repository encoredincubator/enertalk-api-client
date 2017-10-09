'use strict';

module.exports = {
  getBills: function getBills(siteId) {
    return '/sites/' + siteId + '/bills';
  },


  getSuppliers: '/suppliers',

  getRatePlanSchema: function getRatePlanSchema(supplierId, ratePlanId) {
    return '/suppliers/' + supplierId + '/rateplans/' + ratePlanId + '/schema';
  }
};
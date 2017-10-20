'use strict';

var endpoint = require('./endpoint');

var sites = {
  createSite: function createSite(data) {
    return this.post(endpoint.listSites, data || {});
  },
  listSites: function listSites() {
    return this.get(endpoint.listSites);
  },
  getSite: function getSite(siteId) {
    return this.get(endpoint.site(siteId));
  },
  updateSite: function updateSite(siteId, data) {
    return this.patch(endpoint.site(siteId), data || {});
  },
  deleteSite: function deleteSite(siteId) {
    return this.delete(endpoint.site(siteId));
  }
};

module.exports = sites;
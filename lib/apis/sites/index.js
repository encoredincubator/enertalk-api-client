const endpoint = require('./endpoint');

const sites = {
  createSite(data) {
    return this.post(endpoint.listSites, data || {});
  },
  listSites() {
    return this.get(endpoint.listSites);
  },
  getSite(siteId) {
    return this.get(endpoint.site(siteId));
  },
  updateSite(siteId, data) {
    return this.patch(endpoint.site(siteId), data || {});
  },
  deleteSite(siteId) {
    return this.delete(endpoint.site(siteId));
  },
};

module.exports = sites;

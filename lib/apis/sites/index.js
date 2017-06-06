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
  getSiteCategories(siteId, country) {
    return this.get(endpoint.categories(siteId, country));
  },
  updateSite(siteId, data) {
    return this.patch(endpoint.site(siteId), data || {});
  },
  deleteSite(siteId) {
    return this.delete(endpoint.site(siteId));
  },
  updateSiteCategories(siteId, country, data) {
    return this.patch(endpoint.categories(siteId, country), data || {});
  },
};

module.exports = sites;

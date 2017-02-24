const endpoint = require('./endpoint');

class Sites {
  constructor(axios) {
    this.axios = axios;
  }

  createSite(data = {}) {
    return this.axios.post(endpoint.listSites, data);
  }

  listSites() {
    return this.axios.get(endpoint.listSites);
  }

  getSite(siteId) {
    return this.axios.get(endpoint.site(siteId));
  }

  updateSite(siteId, data = {}) {
    return this.axios.patch(endpoint.site(siteId), data);
  }

  deleteSite(siteId) {
    return this.axios.delete(endpoint.site(siteId));
  }

}

module.exports = Sites;

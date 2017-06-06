module.exports = {
  listSites: '/sites',

  site(siteId) {
    return `sites/${siteId}`;
  },

  categories(siteId, country) {
    return `sites/${siteId}/categories?country=${country}`;
  },
}

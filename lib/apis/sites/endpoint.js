module.exports = {
  listSites: '/sites',

  site(siteId) {
    return `sites/${siteId}`;
  }
}

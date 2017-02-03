module.exports = {
  refreshToken: '/token',
  getUser: '/users/me',
  listSites: '/sites',
  listDevicesOfSite(siteIds) {
    return `/sites/${siteIds}/devices`;
  },
  getBills(siteId) {
    return `/sites/${siteId}/bills`;
  },
};

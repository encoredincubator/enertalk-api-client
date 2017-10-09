'use strict';

module.exports = {
  listSites: '/sites',

  site: function site(siteId) {
    return 'sites/' + siteId;
  }
};
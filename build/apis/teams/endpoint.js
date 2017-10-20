'use strict';

module.exports = {
  listTeams: '/teams',

  team: function team(teamId) {
    return '/teams/' + teamId;
  },
  memeberOfTeam: function memeberOfTeam(teamId) {
    return '/teams/' + teamId + '/memberships';
  }
};
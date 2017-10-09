'use strict';

var endpoint = require('./endpoint');

var teams = {
  createTeam: function createTeam(data) {
    return this.post(endpoint.listTeams, data || {});
  },
  listTeams: function listTeams() {
    return this.get(endpoint.listTeams);
  },
  getTeam: function getTeam(teamId) {
    return this.get(endpoint.team(teamId));
  },
  updateTeam: function updateTeam(teamId, data) {
    return this.patch(endpoint.team(teamId), data || {});
  },
  deleteTeam: function deleteTeam(teamId) {
    return this.delete(endpoint.team(teamId));
  },
  addTeamMemeber: function addTeamMemeber(teamId, data) {
    return this.put(endpoint.memeberOfTeam(teamId), data || {});
  },
  removeMember: function removeMember(teamId, data) {
    return this.delete(endpoint.memeberOfTeam(teamId), data || {});
  }
};

module.exports = teams;
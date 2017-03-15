const endpoint = require('./endpoint');

const teams = {
  createTeam(data) {
    return this.post(endpoint.listTeams, data || {});
  },
  listTeams() {
    return this.get(endpoint.listTeams);
  },
  getTeam(teamId) {
    return this.get(endpoint.team(teamId));
  },
  updateTeam(teamId, data) {
    return this.patch(endpoint.team(teamId), data || {});
  },
  deleteTeam(teamId) {
    return this.delete(endpoint.team(teamId));
  },
  addTeamMemeber(teamId, data) {
    return this.put(endpoint.memeberOfTeam(teamId), data || {});
  },
  removeMember(teamId, data) {
    return this.delete(endpoint.memeberOfTeam(teamId), data || {});
  },
};

module.exports = teams;

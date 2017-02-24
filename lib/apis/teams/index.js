const endpoint = require('./endpoint');

class Teams {
  constructor(axios) {
    this.axios = axios;
  }

  createTeam(data = {}) {
    return this.axios.post(endpoint.listTeams, data);
  }

  listTeams() {
    return this.axios.get(endpoint.listTeams);
  }

  getTeam(teamId) {
    return this.axios.get(endpoint.team(teamId));
  }

  updateTeam(teamId, data = {}) {
    return this.axios.patch(endpoint.team(teamId), data);
  }

  deleteTeam(teamId) {
    return this.axios.delete(endpoint.team(teamId));
  }

  addTeamMemeber(teamId, data = {}) {
    return this.axios.put(endpoint.memeberOfTeam(teamId), data);
  }

  removeMember(teamId, data = {}) {
    return this.axios.delete(endpoint.memeberOfTeam(teamId), data);
  }
}

module.exports = Teams;

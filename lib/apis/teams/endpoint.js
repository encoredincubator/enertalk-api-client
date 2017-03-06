module.exports = {
  listTeams: '/teams',

  team(teamId) {
    return `/teams/${teamId}`;
  },

  memeberOfTeam(teamId) {
    return `/teams/${teamId}/memberships`;
  }
}

const bills = require('./bills');
const devices = require('./devices');
const push = require('./push');
const sites = require('./sites');
const tags = require('./tags');
const teams = require('./teams');
const usages = require('./usages');
const users = require('./users');
const timelines = require('./timelines');
const legacy = require('./legacy');

const apis = {
  bills,
  devices,
  push,
  sites,
  tags,
  teams,
  usages,
  users,
  timelines,
  legacy,
};

module.exports = apis;

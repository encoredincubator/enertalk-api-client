'use strict';

var bills = require('./bills');
var devices = require('./devices');
var push = require('./push');
var sites = require('./sites');
var tags = require('./tags');
var teams = require('./teams');
var usages = require('./usages');
var users = require('./users');
var timelines = require('./timelines');
var legacy = require('./legacy');

var apis = {
  bills: bills,
  devices: devices,
  push: push,
  sites: sites,
  tags: tags,
  teams: teams,
  usages: usages,
  users: users,
  timelines: timelines,
  legacy: legacy
};

module.exports = apis;
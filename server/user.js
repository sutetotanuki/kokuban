var util = require('./util');

var userIdMap = {};

function User(params) {
  this.id = params.socket.id;
  this.socket = params.socket;
  userIdMap[this.id] = this;
};

User.create = function(params) {
  new User(params);
};

User.findById = function(id) {
  return userIdMap[id];
};

exports.User = User;

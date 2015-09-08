var util = require('./util');

var rooms = [];

function Room(params) {
  this.id = util.uuid;
  this.name = params.name;
  this.members = [];
}

Room.prototype.addMember = function(user) {
  this.members.push(user);
};

Room.create = function(params) {
  new Room(params);
};

Room.all = function() {
  return rooms;
};

exports.Room = Room;

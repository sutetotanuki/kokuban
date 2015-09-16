var util = require('./util');
var _ = require('lodash');

var rooms = {};

function Room(params) {
  this.id = util.uuid();
  this.name = params.name;
  this.members = [];
}

Room.prototype.addMember = function(user) {
  this.members.push(user);
};

Room.prototype.props = function() {
  return {
    id: this.id,
    name: this.name,
    members: this.members.map(function(member){ return member.props(); })
  };
};

Room.create = function(params) {
  var ins = new Room(params);
  rooms[ins.id] = ins;
  return ins;
};

Room.all = function() {
  return rooms;
};

Room.allObject = function() {
  return _.values(rooms).map(function(room) { return room.props(); })
};

Room.findById = function(id) {
  return rooms[id];
};

exports.Room = Room;

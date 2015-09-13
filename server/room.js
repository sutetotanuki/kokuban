var util = require('./util');

var rooms = [];

function Room(params) {
  this.id = util.uuid();
  this.name = params.name;
  this.members = [];
}

Room.prototype.addMember = function(user) {
  this.members.push(user);
};

Room.prototype.toObject = function() {
  return {
    id: this.id,
    name: this.name,
    members: this.members.map(function(member){return member.toObject() })
  };
};

Room.create = function(params) {
  ins = new Room(params);
  rooms.push(ins);
  return ins;
};

Room.all = function() {
  return rooms;
};

Room.allObject = function() {
  return rooms.map(function(room) { return room.toObject() });
};

exports.Room = Room;

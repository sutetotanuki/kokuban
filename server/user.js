var util = require('./util');

function User(params) {
  this.id = util.uuid();
  this.name = params.name;
};

exports.newUser = function(params) {
  new User(params);
};

var uuid = require('node-uuid');

exports.uuid = function() {
  return uuid.v4();
};

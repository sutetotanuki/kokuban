var socket;

module.exports = function() {
  if (socket) {
    socket = io();
  }

  return socket;
};

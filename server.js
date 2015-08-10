var express = require('express');
var app = express();
var Room = require('./server/room.js').Room;

app.use(express.static('public'));

var server = app.listen(3123);

var io = require('socket.io')(server);

var rooms = [];

io.on('connection', function(socket) {
  socket.on('message', function(message){
    console.log(message);
  });

  socket.on('createRoom', function(roomName) {
    console.log(roomName);
  });
});

console.log('server started');

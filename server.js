var express = require('express');
var app = express();
var User = require('./server/user').User;
var Room = require('./server/room').Room;

app.use(express.static('public'));

var server = app.listen(3123);

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('Connected ' + socket.id);

  User.create({socket: socket});

  socket.on('createRoom', function(params){
    var room = Room.create(params),
        user = User.findById(socket.id);

    room.addMember(user);
    socket.emit('changeRooms', JSON.stringify(Room.allObject()));
  });
});

console.log('server started');

var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(3123);

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('Connected');
  socket.on('message', function(message){
    console.log(message);
  });
});

console.log('server started');

var express = require('express');
var app = express();
app.use(express.static('public'));
var server = app.listen(3000);
var socket = require('socket.io');
var io = socket(server);
console.log('Server created.');
io.sockets.on('connection', newConnection);
function newConnection(socket)
{
  console.log('New Connection.');
  console.log(socket.id);

  socket.on('mouse', mouseMsg);
  function mouseMsg(data)
  {
    socket.broadcast.emit('mouse', data);
  }
}

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var light = require('./controller/lights')

app.engine('jade', require('jade').__express);
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log("logged in");
  socket.on('state', function(state){
    console.log(state.state);
    console.log(state.brightness);
    console.log(state.zone);
    light.changeState(state.state, state.brightness, state.zone);
  });
  socket.on('brightness', function(brightness){
    console.log(brightness.brightness);
    console.log(brightness.zone);
    light.changeBrightness(brightness.brightness, brightness.zone);
  });
});

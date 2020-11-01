const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/front/index.html`);
});

app.get('/videoComponent.js', function(req, res){
  res.sendFile(`${__dirname}/front/components/videoComponent.js`);
});

app.get('/video.mp4', function(req, res){
  res.sendFile(`${__dirname}/front/video.mp4`);
});


io.on('connection', function(socket){
  socket.on('action', function(action){
    io.emit('action', action);
    console.log('Action', action);
  });
});

http.listen(port, function(){
  console.log('Listening on port ' + port);
});

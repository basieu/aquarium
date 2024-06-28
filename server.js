var express = require('express');

var server = express();

server.listen(3000, function() {
    console.log("Server started");
});

server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

server.use("/public", express.static('./public/'));
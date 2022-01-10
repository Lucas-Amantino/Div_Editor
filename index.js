var express = require('express')
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname+'/'));

const port = Number(process.env.PORT|| 5000);

http.listen(port, function () {
  console.log('listening on *:'+port);
});
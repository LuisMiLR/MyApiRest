const express = require('express')
const app = express()



var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': "application/json"});
  res.write('Hello World!');
  res.end();
})

app.listen("3000")
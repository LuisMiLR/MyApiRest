const express = require('express')
const app = express()

app.use(bodyParser.json())

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
})

app.listen("3000")
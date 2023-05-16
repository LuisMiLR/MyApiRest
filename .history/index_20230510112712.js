const express = require('express')
const app = express()

var bodyParser = require('body-parser')

app.use(bodyParser.json())


res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();

app.listen("3000")
const express = require('express');
const app = express()
const fs = require('fs')
const router = require('./routes/router')

// -------- SET & USE -------- //
app.use('/assets', express.static('static'))
app.set('view engine', 'ejs')

// -------- CALL ALL ROUTES -------- //
app.use(router);

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
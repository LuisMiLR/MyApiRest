const express = require('express');
const app = express()
const fs = require('fs')
const router = require('./routes/router')

// -------- SET & USE -------- //
app.use('/assets', express.static('static'))
app.set('view engine', 'ejs')

// -------- CALL ALL ROUTES -------- //
app.use(router);

// -------- LISTEN SERVER PORT -------- //
app.listen(3000)

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
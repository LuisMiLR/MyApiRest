const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv')

dotenv.config({ path: './env'})

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:process.env.
})

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});


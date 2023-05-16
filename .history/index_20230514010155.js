const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv')
const port = process.env.PORT || 3000;

dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, 
    user: process.env.DATABASE_USER, 
    password: process.env.DATABASE_PASSWORD, 
    database: process.env.DATABASE 
});

db.connect( (error) => { 
    if(error) {
        console.log(error)
    }else {
        console.log("MYSQL Connected...");
    }
}) 


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.post('/', )
app.listen(port,() =>console.log('Notre app est démarré sur : http://localhost:${port}'))

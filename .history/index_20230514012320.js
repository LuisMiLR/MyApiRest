const express = require('express');
//au lieu d'appeller ton le module on va appeller que la methode contenu dans le module "success"grace la syntaxe es6 et au affectation destructurer
//const helper = require('./helper.js')
const {success, getUniqueId} = require('./helper.js')
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

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)
    const message ='un user à bien été trouvé'
    res.json(success(message, pokemon))
})

app.post('/', (req, res) => {
    const { body } = req 
    console.log(body);
})
app.listen(port,() =>console.log('Notre app est démarré sur : http://localhost:${port}'))

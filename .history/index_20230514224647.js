const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv')
const port = 3000;

dotenv.config({ path: './.env'});

const app = express();

//Middleware qui permet de traiter les données de la request
app
.use(express.json());
.use
.use("/post", require("./routes/post.routes"));

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



app.listen(port,() =>console.log( `Notre app est démarré sur : http://localhost:${port}`))

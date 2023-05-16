const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv')
const port = 3000;
const db = require('db.js')

dotenv.config({ path: './.env'});

const app = express();

//Middleware qui permet de traiter les données de la request
app
.use(express.json())
.use(express.urlencoded({ extended: false}))
.use("/", require("./backend/routes/routes"));




app.listen(port,() =>console.log( `Notre app est démarré sur : http://localhost:${port}`))

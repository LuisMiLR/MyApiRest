const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const port = 3000;


dotenv.config({ path: './.env'});

const app = express();

//Middleware qui permet de traiter les données de la request
app
.use(express.json())
.use("/", require("./backend/routes/routes"));
.use(express.urlencoded({ extended: false}))



app.listen(port,() => console.log( `Notre app est démarré sur : http://localhost:${port}`))

const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port = 3000;

dotenv.config({ path: './.env'});
const app = express();

//Middleware qui permet de traiter les données de la requete 
app
.use(express.json())
.use("/", require("./backend/routes/routes"))



app.listen(port,() => console.log( `Notre app est démarré sur : http://localhost:${port}`))
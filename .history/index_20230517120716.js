const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const port = 3000;


dotenv.config({ path: './.env'});

const app = express();

//Middleware qui permet de traiter les données de la request
app
.use(express.json())
.use(express.urlencoded({ extended: false}))
.use("/", require("./backend/routes/routes"));

function generateToken(user) {
    const payload = { id: user.id,
    email: user.email,
    role: user.role
    }


const options = { 
    expireIn: process.env.JWT_EXPIRES_IN 
}

return jwt.sign(payload, process.env.JWT_SECRET, options)

}

function verifyToken(req, res, next) {
    const token = req.yeaders.authorization
    if (!token) {
        return res.status(401).json({ error: 'Acess denied. Token missing.'})
    }

    jwt.verify(token, process.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json
        }
    })
}



app.listen(port,() =>console.log( `Notre app est démarré sur : http://localhost:${port}`))

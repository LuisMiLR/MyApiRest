const express = require("express");
const router = express.Router();
const db = require("../config/db");
const mysql = require('mysql');



// Afficher tous les utilisateurs 
router.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if(err) throw err;
        res.json(rows);

    });
});

// Rechercher info sur 1 utilisateur en particulier 

router.get('/users/:idUser',(req, res) => {
    const idUser = req.params.idUser;
    db.query('SELECT * FROM users WHERE idUser = ?', [idUser], (err, rows) => {
        if(err) throw err;
        res.status(400, {message : "an error occured"})
        if(rows.length === 0)  {
            res.status(404).json({message : "User was not found"})
        }else {
            res.json(rows[0]);
            res.status(200);
        }

    })
})
    // inserer dans la base de donnée des users : nouveau champs

router.post('/users', (req, res) => {
    const newUser = req.body;
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) {
            throw err;
            res.status(400, {message: "an error occured"})
        } else {
            newUser.userId = result.insertId;
            res.status(200).json({message : "user successfully created"})
        }
    })
})

router.put('/users', (req, res) => {

    db.query('/users/idUsers', (req, res) => { 
        const idUser = req.params.idUser;
        const updateUser = req.body;
        db.query('UPDATE users SET  ? WHERE userId = ?, [updateUser, userId], (err, result) => { 
        if (err) throw err;
        if (resultat.affectedRows === 0) {
            res.status(400, {message: "an error occurred" })
        }else {
            res.json(updatedUser);
            res.status(200, {message: "user successfully modified})
        }   
        }
            

    })

})


module.exports = router; 
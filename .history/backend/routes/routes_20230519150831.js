const express = require("express");
const router = express.Router();
const db = require("../config/db");
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


//generate JWT token
function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role,
    }

    const options = {
        expiresIn: process.env.JWT_EXPIRES_IN
    }

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Acess denied. Token missing.'});
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({ error: 'Invalid token.'});
        }
        req.user = decoded;
        next();
    });
}

// inserer dans la base de donnée des users : nouveau user

router.post('/user', (req, res) => {
    const { lastName, firstName, email, password, role } = req.body
    bcrypt.hash(password, 10, (error, hashedPassword) => {
        if(error) {
            console.log(error)
            res.status(500).json({ error: 'Operation failed' })
        } else {
            const newUser = { lastName, firstName, email, password: hashedPassword, role }
            db.query('INSERT INTO users SET ?', newUser, (error, result) => {
                if(error) {
                    console.log(error)
                    res.status(500).json({ error: 'Operation failed' })
                } else {
                    const user = { id: result.insertId, ...newUser }
                    const token = generateToken(user)
                    res.status(201).json({
                        message: 'User created successfully',
                        token: token
                    })
                }
            })
        }
    })
})

router.put(./user)


// Afficher tous les utilisateurs 

router.get("/users", (req, res, ) => {
    db.query("SELECT * FROM users", (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to retrieve users" });
      } else {
        res.status(200).json(results);
      }
    });
  });

// Rechercher info sur 1 utilisateur en particulier 

router.get('/user/:id',(req, res) => {
    const idUser = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', idUser, (err, rows) => {
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


//login 
router.post('/login', (req, res) => {
const {email, password} = req.body; 

db.query('SELECT * FROM users WHERE email = ?', email, (error, results) => {
    if (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to login" });
        } else if (results.length === 0) {
            console.log("toto---x");
        res.status(401).json({ error: "Invalid email or password" });
        } else {
        const user = results[0];
        bcrypt.compare(password, user.password, (error, isMatch) => {
            if (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to login" });
            } else if (isMatch) {
            const token = generateToken(user);
            res.status(200).json({
                message: "Login successful",
                token: token,
            });
            } else {
            res.status(401).json({ error: "Invalid email or password" });
            }
        });
        }
    });
});
        

    // mise à jour du profil de l'user
router.put('/users/:id', (req, res) => { 
        const userId = req.params.id;
        const updateUser = req.body;
        db.query('UPDATE users SET ? WHERE id = ?', [updateUser, userId], (err, result) => { 
        if (err) throw err;
        if (result.affectedRows === 0) {
            res.status(400, {message: "an error occurred" })
        }else {
            res.json(updatedUser);
            res.status(200, {message: "user successfully modified"})
        }   
    });
}); 

// suppression d'user
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) throw err;
        if (result.affectedRows === 0) {
            res.status(404).json ({message: "user not found" })
        }else {
            res.json({message: "user successfully deleted"});
            res.status(200)
        }   
    });
});
       

module.exports = router; 
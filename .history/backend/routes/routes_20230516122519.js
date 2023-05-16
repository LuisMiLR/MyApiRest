const express = require("express");
const router = express.Router();


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
    // inserer dans la base de donnée des users :

router.post('/users', (req))

})

/*router.post('/users', )
    const newUser = req.body;
    db.query('INSERT INTO users SET ?')
router.post("/login", (req, res) => {
    res.json({ message: req.body });
});

router.put("/user/:userId", (req, res) => {
    db.query('SELECT * FROM users WHERE userId = ?', [userId], (err, rows) => {
        if (err) throw err; 
        res.status(400) 
    })
        console.log(results);  
        res.json({ messageId: req.params.id });
    });

router.delete("/user/:userId", (req, res) => { 
    res.json({ message: "post supprimé id : " +req.params.id });
});

router.get("/users", (req, res) => {
    db.query('SELECT * FROM users', (err, rows) => {
        if (err) throw err;  
    })
    res.json({ message: "Voici les données" });
});

router.get("/me", (req, res) => {
    res.json({ message: "Voici les données" });
});*/
module.exports = router 
const express = require("express");
const router = express.Router();


router.post('/users', )
    const newUser = req.body;
    db.query('INSERT INTO users SET ?')
router.post("/login", (req, res) => {
    res.json({ message: req.body });
});

router.put("/user/:userId", (req, res) => {
    db.query('SELECT * FROM users WHERE userId = ?', [user] (err, rows) => {
        if (err) throw err;  
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
});

module.exports = router 
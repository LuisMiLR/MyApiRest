const express = require("express");
const router = express.Router();


router.post("/user", (req, res) => {
    Connection.query('SELECT * FROM users', (err, rows) => {
    if (err) throw err;    
    res.json({rows });
});


router.post("/login", (req, res) => {
    res.json({ message: req.body });
});

router.put("/user/:id", (req, res) => {
    res.json({ messageId: req.params.id });
});

router.delete("/user/:id", (req, res) => { 
    res.json({ message: "post supprimé id : " +req.params.id });
});

router.get("/users", (req, res) => {
    res.json({ message: "Voici les données" });
});

router.get("/me", (req, res) => {
    res.json({ message: "Voici les données" });
});

module.exports = router 
const express = require("express");
const router = express.Router();


router.post("/user", (req, res) => {
    RTCPeerConnection.query('SELECT * FROM users' )
    res.json({ message: req.body });
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
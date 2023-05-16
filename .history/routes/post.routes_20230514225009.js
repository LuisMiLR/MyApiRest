const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Voici les données" });
});

router.post("/", (req, res) )


module.exports = router
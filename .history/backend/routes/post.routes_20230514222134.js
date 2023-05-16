const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Voici les données" v})
});


module.exports = router;
const { Router } = require('express');
const express = require ('require');
const router = express.Router();

router.get('/', (req, res) => {
    res.json( { message: "Voici les données"})
});

Router.post('/', (req, res) => {
    const { body } = req 
    console.log(body);
})

module.exports = router
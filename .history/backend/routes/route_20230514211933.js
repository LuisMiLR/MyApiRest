const express = require ('require');
const router = express.Router();

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.post('/', (req, res) => {
    const { body } = req 
    console.log(body);
})

module.exports = router
const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/login', (req, res) => { 
    res.render('pages/login')
} )
app.post('/login', (req, res) => { 
  console.log(req.body);
} )





app.listen("3000")

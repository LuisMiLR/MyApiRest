const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/login', (req, res) => { 
    res.render('pages/login')
} )
app.post('/login', (req, res) => { 
  console.log(req.body);
} )
app.get('/inscription', (req, res) => {
    res.render('pages/inscription')
})
app.post('/inscription', (req, res) => {
  console.log(req.body);
})
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.post('/contact', (req, res) => {
  console.log(req.body);
})


app.listen("3000")
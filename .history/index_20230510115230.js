const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('pages/index')
})
app.get('/', (req, res) => { 
    res.render('hello)
} )






app.listen("3000")

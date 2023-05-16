const express = require('express')
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.render('hello')
})
app.get('/', (req, res) => { 
    res.render('hello')
} )




app.listen("3000")

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});

const express = require('express')
const db  = require('./db')
var bodyParser = require('body-parser')
const person =  require('./model/Person')
const router =   require('./routes/PersonRoutes');
const app = express()

app.use(bodyParser.json()) // middleware
app.use('/person',router);

app.get('/', function (req, res) {
  res.send('Hotel Management Server is Running!')
})

// app is listening on port 3000
app.listen(3000 , ()=>{
    console.log('Server is running on port 3000!')
})
const express = require('express')
const db  = require('./db')
var bodyParser = require('body-parser')
const router =   require('./routes/PersonRoutes');
const app = express()
require('dotenv').config()

app.use(bodyParser.json()) // middleware
app.use('/person',router);

app.get('/', function (req, res) {
  res.send('Hotel Management Server is Running!')
})


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server is running !')
})
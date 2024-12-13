const express = require('express')
const db  = require('./db')
var bodyParser = require('body-parser')
const PersonRoutes =   require('./routes/PersonRoutes');
const app = express()
require('dotenv').config()
const passport  = require('./auth')

app.use(bodyParser.json()) // middleware
app.use(passport.initialize()) // middleware


const localAuthMiddleware = passport.authenticate('local', {session: false})
app.use('/person',localAuthMiddleware,PersonRoutes)

app.get('/',function (req, res) {
  res.send('<b>Hotel Management Server is Running!</b>')
})


app.listen(process.env.PORT || 3000 , ()=>{
    console.log('Server is running !')
})
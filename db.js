const mongoose = require("mongoose");
require('dotenv').config()

const mongoDB_URL = process.env.MONGODB_URL_LOCAL;

mongoose.connect(mongoDB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection ; 

db.on('error', (err)=>{
    console.log("Database Error!",err)
})
db.on('disconnected', ()=>{
    console.log("Database Disconnected!")
})
db.on('connected', ()=>{
    console.log("Database Connection Successfully!")
})

module.exports = db ;
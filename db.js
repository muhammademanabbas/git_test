const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/restaurant";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

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
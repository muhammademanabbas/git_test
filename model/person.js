const mongoose  =  require("mongoose"); 

const PersonSchema  = mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email :{
        type : String ,
        required :  true,
        unique : true,
    },
    mobile : {
        type : String,
        required: true
    },
    address : {
        type : String,
    },
    age:{
        type:Number,
    },
    work:{
        type: String,
        required: true,  
        enum: ['chef', 'waiter', 'manager'],
    },
    salary:{
        type:Number,
        required:true,
    }
})

// it makes the collection (Table) with the plural name of Person mean people
const PersonModel = mongoose.model('Person',PersonSchema);

module.exports = PersonModel ;
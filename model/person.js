const mongoose  =  require("mongoose"); 
const bcrypt  =  require('bcrypt')

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
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

PersonSchema.pre('save', async function(next) {
    const person =  this ; 
    if(!person.isModified('password')) return next() 

        try {
            const salt  =  await bcrypt.genSalt(10); // gen salt
            const hashPass  =  await bcrypt.hash(person.password,salt);
            person.password  =  hashPass;
            next();

        } catch (error) {
            return next(err)
        }
})

PersonSchema.methods.comparePassword  =  async function (plainPassword){
    try {
        const isMatch =  await bcrypt.compare(plainPassword,this.password);
        // how the compare method will work
        // find salt of this.password
        // make the hashpassword of plain text with the this.password salt and then compare
        return isMatch;
    } catch (error) {
        throw error;    
    }
}

// it makes the collection (Table) with the plural name of Person mean people
const PersonModel = mongoose.model('Person',PersonSchema);

module.exports = PersonModel ;
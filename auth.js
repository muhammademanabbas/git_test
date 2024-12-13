const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./model/Person.js'); 

passport.use(new LocalStrategy(async (USERNAME,PASSWORD,Done)=>{
    try {
        // console.log('USERNAME',USERNAME,'PASSWORD',PASSWORD)
        const user = await Person.findOne({username:USERNAME})
        if(!user){
            return Done(null,false , {message : 'Incorrect Username'})
        }
        const isMatchedPassword   =  await user.comparePassword(PASSWORD)
        if(isMatchedPassword){
            return Done(null,user)
        }else{
            console.log('Incorrect Password')
            return Done(null,false , {message : 'Incorrect Password'})
        }
    } catch (error) {
        return Done(error)
    }
}))

module.exports  =  passport
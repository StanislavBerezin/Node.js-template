const bcrypt = require('bcrypt');
const config = require('../../config/config')

module.exports = function(exampleSchema){

//making a token for the user
exampleSchema.methods.generateAuthToken = function(){
    var user = this;
    
    var access = 'auth';
    
    var token = jwt.sign(
        {_id: user._id.toHexString(), access}, 
            config.auth.jwtFindBy).toString();

    user.tokens.push({
        access,
        token
    });


    return user.save().then(()=>{
        return token;
    });
},


//find by token
exampleSchema.statics.findByToken = function (token){
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token, config.auth.jwtFindBy);
    }catch(e){
        return Promise.reject();

    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });

},


//before saving to db salt the password
exampleSchema.pre('save', function (next) {
    var user = this;

    if (user.isModified('password')){

        bcrypt.genSalt(10, (err, salt)=>{

            bcrypt.hash(user.password, salt, (err, hash)=>{
                user.password = hash;
                next();
            })

        });
    }else{
        next();
    }
})





}
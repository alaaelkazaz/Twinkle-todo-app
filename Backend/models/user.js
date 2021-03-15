const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const config = require('config');

// validate user 

function validateUser(user) {
    const schema={
        name: Joi.string().min(3).max(250).required(),
        email: Joi.string().required().min(10).max(250).email(),
        password:Joi.string().min(8).max(1024).required()
    };
    return Joi.validate(user, schema);
};
// create schema 
const userSchema = mongoose.Schema({
    name:{
        type:String,
        minlength: 3,
        maxlength: 250,
        required: true
    },
    email:{
        type: String,
        unique: true,
        minlength:10,
        maxlength:250,
        required: true
    },
    password:{
        type:String, 
        minlength: 8,
        maxlength:2500,
        required:true

    },
    isAdmin: Boolean
});
// generating the auth token for the user 
//config.get('jwtPrivateKey')
userSchema.methods.generateAuthToken = function(){
    return jwt.sign(
        _.pick(this,["_id","isAdmin"],'privateKey')
    )
};


// use schema 
const User = mongoose.model('User',userSchema);
//exports 
module.exports.User = User;
module.exports.validate = validateUser;
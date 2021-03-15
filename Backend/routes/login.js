const Joi=require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User }= require('../models/user');
const express = require('express');
const router = express.Router();

// custom validate the input 
function validate(user){
    const schema = {
    email: Joi.string().required().min(10).max(250).email(),
    password:Joi.string().min(8).max(1024).required()
}
    return Joi.validate(user, schema);
};
// the get route : revise this section 
// using async in bcrypt is better it's just using sync here and in register route 
// to fix unexpected bug 
router.post('/',async(req,res)=>{
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('invalid email or password');
    // change to async if needed 
    const validPass = bcrypt.compareSync(req.body.password, user.password);
    if(!validPass) return res.status(400).send('passsword is invalid');
    //config.get('jwtPrivateKey')
    const token = jwt.sign({_id:user._id},"mySecureKey");
    res.send(token);
});    

module.exports = router ;
const express =require('express');
const router = express.Router();
const { User, validate } = require('../models/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/',async (req, res)=>{
    const users =await User.find()
    res.send(users);
});

router.post('/',async (req,res)=>{

    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email:req.body.email})
    if (user) return res.status(400).send('already registered user');
    user = User(_.pick(req.body,["name","email","password"]));

    const salt =  bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.password, salt);
    await user.save();
    
    //config.get('jwtPrivateKey') add it to sign after u set the enviroment va 
    const jwtToken  = jwt.sign({_id: user._id},"mySecureKey"); 
    res
    .header('x-auth-token',jwtToken)
    .header("access-control-expose-headers", "x-auth-token")
    .send(_.pick(user,['_id', 'name', 'email']));
});

module.exports = router;
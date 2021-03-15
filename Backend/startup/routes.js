const express= require('express');
const register = require('../routes/register');
const login = require('../routes/login');
const noteslist = require('../routes/noteslist');
module.exports = function(app){
     //json middle ware to handle requests body 
     app.use(express.json())
     console.log('called the routes')
     // routes to all pages here 
     app.use('/register',register)
     app.use('/login',login);
     app.use('/',noteslist)
};
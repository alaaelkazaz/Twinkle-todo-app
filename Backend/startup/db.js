const mongoose = require('mongoose');
const config = require('config');
module.exports = function (){
    const db = config.get('db') || "hii set up your db please "
    mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('connected successfully to db '))
};



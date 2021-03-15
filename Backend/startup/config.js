const config = require('config');

module.exports = function (){
    
    /*
    if (!config.get('JwtPrivateKey')){
        throw new Error('Fatal Error : JWT Private Key is Not defined');
    }
    */
   // make sure private key of jwt is set for privacy of our data
    console.log("the app name "+ config.get('name'));
    console.log(`the app enviroment: ${process.env.Node_ENV}`);
};
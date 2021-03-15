const express = require('express');
const config = require('config');
const cors = require('cors');
const app = express();
app.use(cors());

// require all the needed modules here from startup folder 
require('./startup/routes')(app)
require('./startup/db')();
require('./startup/config');

const port = process.env.PORT || config.get("port");
const twinkleServer = app.listen(port, ()=>{
    console.log(`listening happily on ${port}`)
});

module.exports = twinkleServer;
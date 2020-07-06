const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI+process.env.DB_NAME, {user: process.env.DB_USER, pass: process.env.DB_PASS, useUnifiedTopology: true, useNewUrlParser: true}).then(
 
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
     
    err => { /** handle initial connection error */ }
     
);

module.exports = mongoose;
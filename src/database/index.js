const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION+"://"+process.env.DB_HOST+":"+process.env.DB_PORT+"/"+process.env.DB_DATABASE);
mongoose.Promise = global.Promise;

module.exports = mongoose;
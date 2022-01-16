const mongoose = require('mongoose');

const {mongo_url} = require("./config/config");
var MONGO_URL = mongo_url;

class Database {
  mongodbConnect() {
    mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connection to database is successfull')
      })
      .catch((err) => {
        console.log(err)
        console.error('Database Connection Error')
      })
  }
}

module.exports = Database;
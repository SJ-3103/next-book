const mongoose = require('mongoose');

var server = '127.0.0.1:27017'
var database = 'ecom-database'

class Database {
  mongodbConnect() {
    mongoose
      .connect(`mongodb://${server}/${database}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Connection to database is successfull')
      })
      .catch((err) => {
        console.error('Database Connection Error')
      })
  }
}

module.exports = Database;
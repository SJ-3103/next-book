'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.default = void 0

var _mongoose = _interopRequireDefault(require('mongoose'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var server = '127.0.0.1:27017'
var database = 'ecom-database'

class Database {
  mongodbConnect() {
    _mongoose.default
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

var _default = Database
exports.default = _default

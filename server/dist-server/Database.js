"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var server = '127.0.0.1:27017';
var database = 'ecom-database';

var Database = /*#__PURE__*/function () {
  function Database() {
    _classCallCheck(this, Database);
  }

  _createClass(Database, [{
    key: "mongodbConnect",
    value: function mongodbConnect() {
      _mongoose.default.connect("mongodb://".concat(server, "/").concat(database), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(function () {
        console.log("Connection to database is successfull");
      }).catch(function (err) {
        console.error("Database Connection Error");
      });
    }
  }]);

  return Database;
}();

var _default = Database;
exports.default = _default;
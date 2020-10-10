"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _validator = require("validator");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var registerSchema = new _mongoose.default.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is a required field']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required field']
  },
  email: {
    type: String,
    required: [true, 'Email is a required field'],
    unique: true,
    lowercase: true,
    validate: [_validator.isEmail, 'Please enter a correct email']
  },
  password: {
    type: String,
    required: [true, 'Password is a required field'],
    minlength: [6, 'Minimum length must be 6']
  }
}, {
  collection: "registerdata"
}); // fire a function before saving the data to the database
// registerSchema.pre('save', (next) => {
//     var salt = await bcrypt.genSalt()
//     this.password = await bcrypt.hash(this.password, salt)
//     next()
// })
// loginFunc

registerSchema.statics.loginFunc = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(email, password) {
    var check_user, check_password;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.findOne({
              email: email
            });

          case 2:
            check_user = _context.sent;

            if (!check_user) {
              _context.next = 10;
              break;
            }

            _context.next = 6;
            return _bcrypt.default.compare(password, check_user.password);

          case 6:
            check_password = _context.sent;

            if (!check_password) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", check_password);

          case 9:
            throw Error('Password is incorrect');

          case 10:
            throw Error('User does not exists');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var Register = _mongoose.default.model('registerdata', registerSchema);

var _default = Register;
exports.default = _default;
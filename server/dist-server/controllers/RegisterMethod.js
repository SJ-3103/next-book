"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Register = _interopRequireDefault(require("../model/Register"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handleError(err) {
  console.log(err.message, err.code);
  var errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }; // registerdata validation error

  if (err.message.includes('registerdata validation failed')) {
    Object.values(err.errors).forEach(function (_ref) {
      var properties = _ref.properties;
      errors[properties.path] = properties.message;
    });
  } // duplicate email error


  if (err.code === 11000) {
    errors.email = 'This user already exists';
  }

  return errors;
}

var maxAge = 3 * 24 * 60 * 60;

var createCookie = function createCookie(id) {
  return _jsonwebtoken.default.sign({
    id: id
  }, 'THIS IS A SECRET', {
    expiresIn: maxAge // in sec

  });
};

function RegisterMethod(_x, _x2) {
  return _RegisterMethod.apply(this, arguments);
}

function _RegisterMethod() {
  _RegisterMethod = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$params, firstName, lastName, emailId, password, register, token, errors;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$params = req.params, firstName = _req$params.firstName, lastName = _req$params.lastName, emailId = _req$params.emailId, password = _req$params.password;
            _context.prev = 1;
            _context.next = 4;
            return _Register.default.create({
              firstName: firstName,
              lastName: lastName,
              email: emailId,
              password: password
            });

          case 4:
            register = _context.sent;
            token = createCookie(register._id);
            res.cookie('jwt', token, {
              httpOnly: true
            });
            res.status(201).send({
              user: user._id
            });
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            errors = handleError(_context.t0);
            res.status(401).send(errors);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));
  return _RegisterMethod.apply(this, arguments);
}

var _default = RegisterMethod;
exports.default = _default;
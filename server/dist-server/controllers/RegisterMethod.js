"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Register = _interopRequireDefault(require("../model/Register"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleError(err) {
  console.log(err.message, err.code);
  var errors = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }; // registerdata validation error

  if (err.message.includes('registerdata validation failed')) {
    Object.values(err.errors).forEach(({
      properties
    }) => {
      errors[properties.path] = properties.message;
    });
  } // duplicate email error


  if (err.code === 11000) {
    errors.email = 'This user already exists';
  }

  return errors;
}

var maxAge = 3 * 24 * 60 * 60;

var createCookie = id => {
  return _jsonwebtoken.default.sign({
    id
  }, 'THIS IS A SECRET', {
    expiresIn: maxAge // in sec

  });
};

async function RegisterMethod(req, res) {
  var {
    firstName,
    lastName,
    emailId,
    password
  } = req.params;

  try {
    var register = await _Register.default.create({
      firstName: firstName,
      lastName: lastName,
      email: emailId,
      password: password
    });
    var token = createCookie(register._id);
    res.cookie('jwt', token, {
      httpOnly: true
    });
    res.status(201).send({
      user: user._id
    });
  } catch (err) {
    var errors = handleError(err);
    res.status(401).send(errors);
  }
}

var _default = RegisterMethod;
exports.default = _default;
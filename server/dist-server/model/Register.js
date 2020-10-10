"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

var _validator = require("validator");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var registerSchema = new _mongoose.Schema({
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

registerSchema.pre('save', async function () {
  var salt = await _bcrypt.default.genSalt();
  this.password = await _bcrypt.default.hash(this.password, salt);
});

const Register = _mongoose.default.model('registerdata', registerSchema);

var _default = Register;
exports.default = _default;
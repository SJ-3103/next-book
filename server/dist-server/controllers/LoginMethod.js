"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UserData = _interopRequireDefault(require("../model/UserData"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function LoginMethod(req, res) {
  var {
    emailId,
    password
  } = req.body;

  try {
    var authUser = await _UserData.default.findOne({
      email: emailId
    });

    if (authUser) {
      var check_password = await _bcrypt.default.compare(password, authUser.password);

      if (check_password) {
        res.status(200).json({
          mssg: true
        });
      } else {
        throw Error('Password is incorrect');
      }
    } else {
      throw Error('Email doesnot exists');
    }

    res.status(200).json({
      user: user._id
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      mssg: false
    });
  }
}

var _default = LoginMethod;
exports.default = _default;
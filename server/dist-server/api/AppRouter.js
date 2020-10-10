"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RegisterMethod = _interopRequireDefault(require("../controllers/RegisterMethod"));

var _LoginMethod = _interopRequireDefault(require("../controllers/LoginMethod"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();
router.post('/api/register/:firstName/:lastName/:emailId/:password', _RegisterMethod.default);
router.post('/api/login/:emailId/:password', _LoginMethod.default);
router.get('/api/getDetail', getDetail);

function getDetail(req, res) {
  console.log(req.body);
  res.json({
    msg: 'Getting Details'
  });
}

var _default = router;
exports.default = _default;
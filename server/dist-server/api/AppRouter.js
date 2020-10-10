"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _RegisterMethod = _interopRequireDefault(require("../controllers/RegisterMethod"));

var _LoginMethod = _interopRequireDefault(require("../controllers/LoginMethod"));

var _HandleTrending = _interopRequireDefault(require("../controllers/HandleTrending"));

var _HandleBest = _interopRequireDefault(require("../controllers/HandleBest"));

var _HandleNew = _interopRequireDefault(require("../controllers/HandleNew"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _express.Router();
router.post('/api/register/:firstName/:lastName/:emailId/:password', _RegisterMethod.default);
router.post('/api/login/:emailId/:password', _LoginMethod.default);
router.get('/api/get/trending', _HandleTrending.default);
router.get('/api/get/bestselling', _HandleBest.default);
router.get('/api/get/newarrivals', _HandleNew.default);
var _default = router;
exports.default = _default;
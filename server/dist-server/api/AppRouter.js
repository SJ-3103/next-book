"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _RegisterMethod = _interopRequireDefault(require("../controllers/RegisterMethod"));

var _LoginMethod = _interopRequireDefault(require("../controllers/LoginMethod"));

var _HandleTrending = _interopRequireDefault(require("../controllers/HandleTrending"));

var _HandleBest = _interopRequireDefault(require("../controllers/HandleBest"));

var _HandleNew = _interopRequireDefault(require("../controllers/HandleNew"));

var _AddData = _interopRequireDefault(require("../controllers/AddData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)(); // parse application/x-www-form-urlecnoded
// router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// router.use(bodyParser.json())
// specific parse

var jsonParser = _bodyParser.default.json({
  type: 'application/*+json'
});

var urlencodedParser = _bodyParser.default.urlencoded({
  extended: false
}); // router.post('/api/register', jsonParser, RegisterMethod);


router.post('/api/register', (req, res) => {
  console.log(req.body);
});
router.post('/api/login', urlencodedParser, _LoginMethod.default);
router.post('/api/addData', _AddData.default);
router.get('/api/get/trending', _HandleTrending.default);
router.get('/api/get/bestselling', _HandleBest.default);
router.get('/api/get/newarrivals', _HandleNew.default);
var _default = router;
exports.default = _default;
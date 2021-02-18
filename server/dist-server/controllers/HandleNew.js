"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BookData = _interopRequireDefault(require("../model/BookData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function HandleNew(req, res) {
  var {
    value
  } = req.body;

  try {
    var docs = await _BookData.default.find().limit(value);
    res.status(200).json(docs);
  } catch (err) {
    console.log(err);
  }
}

var _default = HandleNew;
exports.default = _default;
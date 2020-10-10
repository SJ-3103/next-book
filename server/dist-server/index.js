"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _Database = _interopRequireDefault(require("./Database"));

var _AppRouter = _interopRequireDefault(require("./api/AppRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = 4000;
var db = new _Database.default();
app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});
db.mongodbConnect();
app.use(_AppRouter.default);
app.listen(PORT, () => {
  console.log('App is working on port ' + PORT);
});
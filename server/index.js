var express = require("express");
var logger = require("morgan");
var cors = require("cors");

const Database = require("./Database");
const router = require("./api/router");

const {port} = require('./config/config');

var app = express();

var PORT = port || 4000;

var db = new Database();

app.use(express.static(`${__dirname}/../build`));

app.use(logger("dev"));

app.use(express.json());

app.use(cors());

db.mongodbConnect();

app.use(router);

app.listen(PORT, () => {
  console.log("App is working on port " + PORT);
});
var express = require("express");
var logger = require("morgan");
var cors = require("cors");

const Database = require("./Database");
const router = require("./api/router");

var app = express();

var PORT = 4000;

var db = new Database();

app.use(logger("dev"));

app.use(express.json());

app.use(cors());

db.mongodbConnect();

app.use(router);

app.listen(PORT, () => {
  console.log("App is working on port " + PORT);
});

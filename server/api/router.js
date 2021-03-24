var { Router } = require("express");
var bodyParser = require("body-parser");

var {
  Register,
  Login,
  LogOut,
  GetDetails,
  SendBooks,
  MostRatedBooks,
  InsertNewBooks,
  InsertBestBooks,
  CheckLogin
} = require("../controllers/controller");

var router = Router();

var jsonParser = bodyParser.json();

router.get("/check", (req, res) => {
  res.status(200).json({ msg: "Server is working" });
});

router.get("/api/get/books", jsonParser, SendBooks);
router.get("/api/get/details", GetDetails);

router.post("/api/register", jsonParser, Register);
router.post("/api/login", jsonParser, Login);
router.get("/api/logout", LogOut);

router.get('/check/login', CheckLogin)

router.get("/insert/books/most/rated", MostRatedBooks);
router.get("/insert/books/new/books", InsertNewBooks);
router.get("/insert/books/best/books", InsertBestBooks);

module.exports = router;
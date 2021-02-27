import { Router } from "express";
import bodyParser from "body-parser";
import CookieData from '../model/CookieData'

import RegisterMethod from "../controllers/RegisterMethod";
import LoginMethod from "../controllers/LoginMethod";
import LogOutMethod from "../controllers/LogOutMethod";

//
import SendBooks from "../controllers/get books/SendBooks";
import GetDetails from "../controllers/get books/GetDetails";
//

//
import MostRatedBooks from "../controllers/insert data/MostRatedBooks";
import InsertNewBooks from "../controllers/insert data/InsertNewBooks";
import InsertBestBooks from "../controllers/insert data/InsertBestBooks";
//

var router = Router();

var jsonParser = bodyParser.json();

router.get("/check", (req, res) => {
  res.status(200).json({ msg: "Server is working" });
});

//
router.get("/api/get/books", jsonParser, SendBooks);
router.get("/api/get/details", GetDetails);
//

router.post("/api/register", jsonParser, RegisterMethod);
router.post("/api/login", jsonParser, LoginMethod);
router.get("/api/logout", LogOutMethod);
router.get('/check/login', async (req, res) => {
  if (req.headers.cookie) {
    let cookie_from_client = req.headers.cookie.slice(3)
    let cookie_from_database = await CookieData.find({ cookie_value: cookie_from_client })
    if (cookie_from_database) {
      res.status(200).json({ msg: 'You are already logged in' })
      return
    }
  }

  res.cookie('jwt', "", { httpOnly: true })
  res.status(400).json({ msg: 'Please Login' })
  return
})

//
router.get("/insert/books/most/rated", MostRatedBooks);
router.get("/insert/books/new/books", InsertNewBooks);
router.get("/insert/books/best/books", InsertBestBooks);
//

export default router;
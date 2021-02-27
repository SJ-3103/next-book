import { Router } from "express";
import bodyParser from "body-parser";

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

//
router.get("/insert/books/most/rated", MostRatedBooks);
router.get("/insert/books/new/books", InsertNewBooks);
router.get("/insert/books/best/books", InsertBestBooks);
//

export default router;
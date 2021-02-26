import { Router } from 'express'
import bodyParser from 'body-parser'

import RegisterMethod from '../controllers/RegisterMethod'
import LoginMethod from '../controllers/LoginMethod'
import LogOutMethod from '../controllers/LogOutMethod'

// 
import SendBooks from '../controllers/SendBooks'
// 

// 
import MostRatedBooks from '../controllers/MostRatedBooks'
import InsertNewBooks from '../controllers/InsertNewBooks'
import InsertBestBooks from '../controllers/InsertBestBooks'
// 

var router = Router()

var jsonParser = bodyParser.json()

router.get('/check', (req, res) => {
  res.status(200).json({ msg: 'Server is working' })
})

// 
router.get('/api/get/books', jsonParser, SendBooks)
// 

router.post('/api/register', jsonParser, RegisterMethod)
router.post('/api/login', jsonParser, LoginMethod)
router.get('/api/logout', LogOutMethod)

// 
router.get('/insert/books/most/rated', MostRatedBooks)
router.get('/insert/books/new/books', InsertNewBooks)
router.get('/insert/books/best/books', InsertBestBooks)
// 

export default router

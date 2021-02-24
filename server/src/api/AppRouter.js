import { Router } from 'express'
import bodyParser from 'body-parser'

import RegisterMethod from '../controllers/RegisterMethod'
import LoginMethod from '../controllers/LoginMethod'
import LogOutMethod from '../controllers/LogOutMethod'

import HandleTrending from '../controllers/HandleTrending'
import HandleBest from '../controllers/HandleBest'
import HandleNew from '../controllers/HandleNew'
import AddData from '../controllers/AddData'

var router = Router()

var jsonParser = bodyParser.json()

router.get('/check', (req, res) => {
  res.status(200).json({ msg: 'Server is working' })
})

router.post('/api/register', jsonParser, RegisterMethod)

router.post('/api/login', jsonParser, LoginMethod)

router.get('/api/logout', LogOutMethod)

router.post('/api/addData', AddData)

router.get('/api/get/trending', HandleTrending)

router.get('/api/get/bestselling', HandleBest)

router.get('/api/get/newarrivals', HandleNew)

export default router

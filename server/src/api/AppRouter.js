import { Router } from 'express'
import bodyParser from 'body-parser'

import RegisterMethod from '../controllers/RegisterMethod'
import LoginMethod from '../controllers/LoginMethod'
import HandleTrending from '../controllers/HandleTrending'
import HandleBest from '../controllers/HandleBest'
import HandleNew from '../controllers/HandleNew'
import AddData from '../controllers/AddData'

var router = Router()

// parse application/x-www-form-urlecnoded
// router.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// router.use(bodyParser.json())

// specific parse
var jsonParser = bodyParser.json({ type: 'application/*+json' })

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// router.post('/api/register', jsonParser, RegisterMethod);
router.post('/api/register', (req, res) => {
  console.log(req.body)
})

router.post('/api/login', urlencodedParser, LoginMethod)

router.post('/api/addData', AddData)

router.get('/api/get/trending', HandleTrending)

router.get('/api/get/bestselling', HandleBest)

router.get('/api/get/newarrivals', HandleNew)

export default router

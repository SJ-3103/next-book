import { Router } from 'express'

import RegisterMethod from '../controllers/RegisterMethod'
import LoginMethod from '../controllers/LoginMethod'
import HandleTrending from '../controllers/HandleTrending'
import HandleBest from '../controllers/HandleBest'
import HandleNew from '../controllers/HandleNew'

const router = new Router();

router.post('/api/register/:firstName/:lastName/:emailId/:password', RegisterMethod);
router.post('/api/login/:emailId/:password', LoginMethod)

router.get('/api/get/trending', HandleTrending)

router.get('/api/get/bestselling', HandleBest)

router.get('/api/get/newarrivals', HandleNew)

export default router
import { Router } from 'express'

import RegisterMethod from '../controllers/RegisterMethod'
import LoginMethod from '../controllers/LoginMethod'

const router = new Router();

router.post('/api/register/:firstName/:lastName/:emailId/:password', RegisterMethod);
router.post('/api/login/:emailId/:password', LoginMethod)
router.get('/api/getDetail', getDetail)

function getDetail(req, res) {
    console.log(req.body)
    res.json({ msg: 'Getting Details' })
}

export default router
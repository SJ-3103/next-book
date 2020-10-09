const { Router } = require('express');
const router = new Router();

var controllers = require('../controllers/controllers');


router.post('/api/register/:firstName/:lastName/:emailId/:password', controllers.registerMethod);

router.post('/api/login/:emailId/:password', controllers.loginMethod)

module.exports = router;
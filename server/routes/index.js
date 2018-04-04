var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/images', require('./images'))
router.use('/events', require('./events'))
router.use('/fb-auth', require('./fb-auth'))
module.exports = router;

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.json(process.env.FACEBOOK_ID)
  .catch(next)
})

module.exports = router

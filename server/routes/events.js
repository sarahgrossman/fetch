var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('req body is ', req.body);
  Event.create(
    req.body
  )
  .then(() => res.send('Thanks!'));
})

module.exports = router;

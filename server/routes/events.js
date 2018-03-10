var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  Event.create(
    req.body
  )
  .then((createdEvent) => res.json(createdEvent));
})

module.exports = router;

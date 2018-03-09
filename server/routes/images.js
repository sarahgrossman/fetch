var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', (req, res, next) => {
  Image.create(req.body)
  .then(() => res.send('Image added to db'))
  .catch(next);
})

module.exports = router;

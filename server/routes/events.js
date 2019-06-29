var express = require('express')
var router = express.Router()
const {User, Event, Image} = require('../db/models')


/* GET users listing. */
router.get('/:name', function(req, res, next) {
  Event.findOne({
    where: {
      name: req.params.name
    }
  })
  .then(foundEvent => res.json(foundEvent))
  .catch(next)
})

router.post('/', function(req, res, next) {
  Event.create(
    req.body
  )
  .then((createdEvent) => res.json(createdEvent))
})

module.exports = router

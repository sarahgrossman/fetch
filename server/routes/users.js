var express = require('express')
var router = express.Router()
const {User, Event, Image} = require('../db/models')


/* TODO: Implement signup and GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

module.exports = router

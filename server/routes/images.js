var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');
const multer = require('multer');
const upload = multer({ dest: './public/images'});
var path = require('path');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('/Users/sarahgrossman/fullstack-senior-phase/fetch/server/public/images/3d69867ae54e871a3f331b69de007fb3');
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log('form fields are ', req.body);
  console.log('form files are', req.file);
  res.status(204).end();
})

module.exports = router;

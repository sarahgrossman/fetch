var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');
const multer = require('multer');
const upload = multer({ dest: './public/images'});
var path = require('path');

router.use(express.static(path.join(__dirname, 'public')));


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('http://localhost:5000/images/d9b0c0018e62a4e326ff541ff2b0a55b');
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log('form fields are ', req.body);
  console.log('form files are', req.file);
  res.status(204).end();
})

module.exports = router;

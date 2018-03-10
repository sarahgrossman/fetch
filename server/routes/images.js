var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');
const multer = require('multer');
const upload = multer({ dest: './public/images'})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'public/images/50b873ad0c26bd37c038035ea4c3e1d6'))
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log('form fields are ', req.body);
  console.log('form files are', req.file);
  res.status(204).end();
})

module.exports = router;

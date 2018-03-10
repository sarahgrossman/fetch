var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');
const multer = require('multer');
// const upload = multer({ dest: './public/images'});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/sarahgrossman/fullstack-senior-phase/fetch/server/public/images')
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.eventId}-${req.body.userId}-${file.fieldname}`);
  }
})

var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('http://localhost:5000/images/d9b0c0018e62a4e326ff541ff2b0a55b');
});

router.post('/', upload.single('photo'), (req, res, next) => {
  // res.status(204).end();
  Image.create({
    uri: `${req.body.eventId}-${req.body.userId}-photo`,
    eventId: req.body.eventId,
    userId: req.body.userId
  })
  .then((createdImage) => res.status(204).json(createdImage))
})

module.exports = router;

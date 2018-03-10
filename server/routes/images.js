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
    cb(null, `${req.body.eventId}-${file.fieldname}-${Date.now()}`);
  }
})

var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/', function(req, res, next) {
  Image.findAll({
    where: {
      eventId: 2
    }
  })
  .then((foundImages) => res.json(foundImages));
});

router.post('/', upload.single('photo'), (req, res, next) => {
  console.log('req.file is', req.file.filename);
  Image.create({
    uri: `http://localhost:5000/images/${req.file.filename}`,
    eventId: req.body.eventId,
    // userId: req.body.user
  })
  .then((createdImage) => res.status(204).json(createdImage))
})

module.exports = router;

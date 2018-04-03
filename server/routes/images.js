var express = require('express');
var router = express.Router();
const {User, Event, Image} = require('../db/models');
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')

/* eslint-disable */
AWS.config.update({"accessKeyId": process.env.AWS_ID, "secretAccessKey": process.env.AWS_KEY, "region": process.env.AWS_REGION})
/* eslint-enable */

const s3 = new AWS.S3()


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'fetch-app-fsa',
    acl: 'public-read',
    // contentType: (req, file, cb) => {
    //   return cb(null, {fieldName: file.fieldname})
    // }, // multerS3.AUTO_CONTENT_TYPE,
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.fieldname })
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})


// fetch all images for a given event
router.get('/:id', function(req, res, next) {
  Image.findAll({
    where: {
      eventId: req.params.id
    }
  })
  .then((foundImages) => res.json(foundImages));
});

// upload image
router.post('/', upload.single('photo'), (req, res, next) => {
  console.log('req.file is', req.file.filename);
  console.log('req file location is', req.file.location)
  Image.create({
    uri: req.file.location,
    eventId: req.body.eventId,
    // userId: req.body.user
  })
  .then((createdImage) => res.status(204).json(createdImage))
})

module.exports = router;

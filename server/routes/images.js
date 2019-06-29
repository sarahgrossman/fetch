const express = require('express')
const router = express.Router()
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const { Image } = require('../db/models')

/* eslint-disable */
AWS.config.update({"accessKeyId": process.env.AWS_ID, "secretAccessKey": process.env.AWS_KEY, "region": process.env.AWS_REGION})
/* eslint-enable */

const s3 = new AWS.S3()


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'fetch-app-fsa',
    acl: 'public-read',
    metadata: function(req, file, cb) {
      cb(null, { eventId: req.body.eventId})
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
  .then((foundImages) => res.json(foundImages))
})

// upload image
router.post('/', upload.single('photo'), (req, res, next) => {
  Image.create({
    uri: req.file.location,
    eventId: req.body.eventId,
    // userId: req.body.user
  })
  .then((createdImage) => res.status(204).json(createdImage))
})

module.exports = router

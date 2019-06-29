const Sequelize = require('Sequelize')
const db = require('../db')

const Image = db.define('images', {
    uri: {
      type: Sequelize.TEXT
    }
})

module.exports = Image

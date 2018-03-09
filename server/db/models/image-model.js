const Sequelize = require('Sequelize');
const db = require('../db');

const Image = db.define('images', {
  name: {
    type: Sequelize.BLOB
  }
});

module.exports = Image;

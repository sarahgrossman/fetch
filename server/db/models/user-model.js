const Sequelize = require('Sequelize');
const db = require('../db');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = User;

const Sequelize = require('Sequelize');
const db = require('../db');

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Event;

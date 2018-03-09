const User = require('./user-model');
const Image = require('./image-model');
const Event = require('./event-model');

Image.belongsTo(User);

module.exports = {
  User,
  Image,
  Event
}

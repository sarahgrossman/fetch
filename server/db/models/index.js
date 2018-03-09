const User = require('./user-model');
const Image = require('./image-model');
const Event = require('./event-model');

Image.belongsTo(User);
Image.belongsTo(Event);

module.exports = {
  User,
  Image,
  Event
}

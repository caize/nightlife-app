const Mongoose = require('mongoose');

const Venue = new Mongoose.Schema({
  venueId: String,
  userIds: Array
});

module.exports = Venue;

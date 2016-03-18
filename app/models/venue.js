const Mongoose = require('mongoose');

const Venue = new Mongoose.Schema({
  venueId: String,
  numGoing: Number,
  userIds: Array
});

module.exports = Venue;

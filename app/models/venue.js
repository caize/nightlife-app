const Mongoose = require('mongoose');

const Venue = new Mongoose.Schema({
  venueId: String,
  userIds: Array,
  createdAt: {
    type: Date,
    expires: 86400,
    default: Date.now
  }
});

module.exports = Venue;

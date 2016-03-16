const Mongoose = require('mongoose');

const User = new Mongoose.Schema({
  profileId: String,
  fullName: String,
  recentSearch: String
});

module.exports = User;

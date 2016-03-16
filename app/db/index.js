'use strict';
const config = require('../config');
const User = require('../models/user');
const Venue = require('../models/venue');
const mongoose = require('mongoose');

mongoose.connect(config.dbURI, (err, db) => {
  if (err) {
    console.log('MongoDB Error: ', error);
  } else {
      console.log('Connected to nightlife-app database');
    }
});

// Turn schemas into a usable models
let userModel = mongoose.model('User', User);
let venueModel = mongoose.model('Venue', Venue);

module.exports = {
  mongoose,
  userModel,
  venueModel
}

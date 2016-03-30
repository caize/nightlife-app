'use strict';
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const config = require('../config');
const db = require('../db');

if (process.env.NODE_ENV === 'production') {
  // Initialize session with production settings
  module.exports = session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db.mongoose.connection
    }) // Where sessions are stored
  });
} else {
  // Initialize session with development settings
  module.exports = session({
    secret: config.sessionSecret,
    resave: false, // prevent calls to DB when session has not changed
    saveUninitialized: true, // stores session even when no data is available to be stored
  });
}

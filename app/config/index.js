'use strict';

if (process.env.NODE_ENV === 'production') {
  // Offer production stage env vars
  module.exports = {
    host: process.env.host || "",
    dbURI: process.env.dbURI,
    sessionSecret: process.env.sessionSecret,
    twitter: {
      consumerKey: process.env.twitterConsumerKey,
      consumerSecret: process.env.twitterConsumerSecret,
      callbackURL: process.env.host + "/auth/twitter/callback",
      profileFields: ["id", "displayName"]
    }
  }
} else {
  module.exports = require('./development.json');
}

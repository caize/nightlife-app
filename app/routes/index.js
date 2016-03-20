/* Use this file to export all routes */
'use strict';
const auth = require('./auth');
const user = require('./user');
const venue = require('./venue');

const router = require('express').Router();

// // main router
// router.get('/', (req, res, next) => {
//   if (typeof req.user !== 'undefined' && typeof req.user.fullName !== 'undefined') {
//     res.send(`<h1>Welcome, ${req.user.fullName}<br /></h1><a href="/auth/logout">Logout</a>`);
//   } else {
//     res.send('<a href="/auth/twitter">Login with Twitter!</a>');
//   }
// });

router.get('/', (req, res, next) => {
  res.sendFile('/public/index.html');
});

module.exports = {
  main: router,
  auth,
  user,
  venue
}

/* Use this file to export all routes */
'use strict';
const auth = require('./auth');
const user = require('./user');
const venue = require('./venue');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = {
  main: router,
  auth,
  user,
  venue
}

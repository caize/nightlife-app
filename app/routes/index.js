/* Use this file to export all routes */

'use strict';

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

module.exports = {
  router: router
}

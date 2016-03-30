'use strict';
const venueRouter = require('express').Router();
const passport = require('passport');

venueRouter.get('/:venue', (req, res, next) => {
  let venue = req.params.venue;
  if (req.user) {
    res.send(venue);
  }
  else {
    res.redirect('/');
  }
});


module.exports = venueRouter;

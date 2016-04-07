'use strict';
const venueRouter = require('express').Router();
const passport = require('passport');
const h = require('../helpers');

venueRouter.get('/:venueId', (req, res, next) => {
  let venueId = req.params.venueId;
  if (req.user) {
    let userId = req.user._id
    h.findOneVenue(venueId).then(venue => {
      // Add or remove user from venue
      if (venue.userIds.indexOf(userId) !== -1) {
        // Remove User Id
        h.removeUserFromVenue(venueId, userId).then(response => {
          return res.send('User has been removed from attendees');
        })
        .catch(err => {
          res.status(500).send(err);
        });
      } else {
        // Add user to attendees
        h.addUserToVenue(venueId, userId).then(response => {
          res.send(response);
        })
        .catch(err => {
          return res.status(500).send(err);
        });
      }
    })
    .catch(e => {
      h.addNewVenue(venueId, userId).then(venue => {
        res.json(venue)
      })
      .catch(e => {
        res.status(500).send(e);
      });
    });
  }
  else {
    res.redirect('/');
  }
});


module.exports = venueRouter;

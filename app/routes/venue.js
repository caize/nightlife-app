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
        h.removeUserFromVenue(venueId, userId).then(updatedVenue => {
          return res.send(updatedVenue);
        })
        .catch(err => {
          return res.status(500).send('Could not remove userId');
        });
      } else {
        // Add user to attendees
        h.addUserToVenue(venueId, userId).then(updatedVenue => {
          return res.send(updatedVenue);
        })
        .catch(err => {
          return res.status(500).send('Could not add userId');
        });
      }
    })
    .catch(e => {
      h.addNewVenue(venueId, userId).then(venue => {
        return res.json(venue)
      })
      .catch(e => {
        return res.status(500).send('Could not add new venue');
      });
    });
  }
  else {
    res.redirect('/');
  }
});


module.exports = venueRouter;

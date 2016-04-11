'use strict';

const apiRouter = require('express').Router();
const yelpApi = require('../helpers/yelpApi');
const h = require('../helpers');

apiRouter.get('/yelp/:location', (req, res, next) => {
  let yelp = new yelpApi();

  let location = req.params.location;

  let searchOptions = {
    location: location,
    sort: 2,
    limit: 20,
    radius_filter: 15000,
    category_filter: "bars"
  }

  if (!req.user) {
    req.session.recentSearch = location;
  } else {
    // Add to user as recentSearch
    h.addRecentSearch(req.user._id, location).then(response => {
      req.session.recentSearch = '';
    }, (error) => {
      console.log('Error adding recent search: ', error);
    });
  }

  yelp.request_yelp(searchOptions, (error, response, body) => {
    if (error) {
      return res.send(error);
    }
    else {
      let apiResults = JSON.parse(body);
      apiResults = apiResults.businesses;
      // // Get all db venue entries
      h.getAllVenues().then(dbVenues => {
        let combinedResult = apiResults.map((venue) => {
          // Check if venue is in the database
          let venueObject = dbVenues.find((dbVenue) => {
            return dbVenue.venueId === venue.id;
          });
          if (typeof venueObject !== 'undefined') {
            // Copy userIds array from db into yelp response
            venue.userIds = venueObject.userIds;
          }
          return venue;
        });
        return res.json(combinedResult);
      })
      .catch(e => {
        res.status(500).send('Error: ', e);
      })
      // iterate through apiResults and check if it is in db
      // If in DB, add user list to venue for response
    }
  });
});

module.exports = apiRouter;

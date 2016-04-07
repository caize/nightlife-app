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
  yelp.request_yelp(searchOptions, (error, response, body) => {
    if (error) {
      return res.send(error);
    }
    else {
      let apiResults = JSON.parse(body);
      // // Get all db venue entries
      // h.getAllVenues().then(dbVenues => {
      //   console.log(dbVenues);
      // })
      // .catch(e => {
      //   console.log('Error: ', e);
      // })
      // // iterate through apiResults and check if it is in db
      // // If in DB, add user list to venue for response

      return res.json(apiResults);
    }
  });
});

module.exports = apiRouter;

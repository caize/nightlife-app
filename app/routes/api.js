'use strict';

const apiRouter = require('express').Router();
const yelpApi = require('../helpers/yelpApi');

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
    console.log('called yelp search');
    if (error) {
      return res.send(error);
    }
    else {
      return res.json(JSON.parse(body));
    }
  });
});

module.exports = apiRouter;

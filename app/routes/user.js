'use strict';
const userRouter = require('express').Router();
const passport = require('passport');
userRouter.get('/current', (req, res, next) => {
  if (!req.user || typeof req.user === 'undefined') {
    let recentSearch = req.session.recentSearch || '';
    return res.status(401).send(JSON.stringify({
      message: 'User not logged in',
      recentSearch: recentSearch
    }));
  } else {
    let user = req.user;
    let recentSearch = req.session.recentSearch || '';
    let modifiedUser = Object.assign({}, req.user, { recentSearch: recentSearch });

    return res.json(modifiedUser);
  }
});


module.exports = userRouter;

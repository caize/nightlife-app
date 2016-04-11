'use strict';
const userRouter = require('express').Router();
const passport = require('passport');
userRouter.get('/current', (req, res, next) => {
  if (!req.user || typeof req.user === 'undefined') {
    let recentSearch = req.session.recentSearch || null;
    return res.status(401).send(JSON.stringify({
      message: 'User not logged in',
      recentSearch: recentSearch
    }));
  } else {
    let user = req.user;
    if (user.recentSearch === '' && typeof req.session.recentSearch !== '') {
      user.recentSearch = req.session.recentSearch;
    }

    return res.json(req.user);
  }
});


module.exports = userRouter;

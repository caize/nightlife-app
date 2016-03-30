'use strict';
const userRouter = require('express').Router();
const passport = require('passport');
userRouter.get('/current', (req, res, next) => {
  if (!req.user || typeof req.user === 'undefined') {
    return res.status(401).send('User not logged in');
  } else {
    return res.json(req.user);
  }
});


module.exports = userRouter;

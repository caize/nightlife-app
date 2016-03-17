'use strict';

const passport = require('passport');
const authRouter = require('express').Router();

authRouter.get('/twitter', passport.authenticate('twitter'));

authRouter.get('/twitter/callback', passport.authenticate('twitter', {
  successRedirect: '/',
  failureRedirect: '/'
}));

authRouter.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;

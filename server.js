'use strict';

const express = require('express');
const app = express();
const nightLife = require('./app');
const routes = nightLife.routes;
const PORT = process.env.PORT || 3000;
const db = require('./app/db');
const config = require('./app/config/index');
const passport = require('passport');

app.use(nightLife.session);
app.use(passport.initialize());
app.use(passport.session());

// Mount routes
app.use('/auth', routes.auth);
app.use('/', routes.main);


app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});

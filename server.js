'use strict';

const express = require('express');
const app = express();
const nightLife = require('./app');
const PORT = process.env.PORT || 3000;
const db = require('./app/db');
const config = require('./app/config/index');
const routes = nightLife.routes;

app.use(nightLife.session);
// main app routes
app.use('/', routes.main);


app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});

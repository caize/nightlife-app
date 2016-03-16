'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./app/routes');
const db = require('./app/db');
const config = require('./app/config/index');

// main app routes
app.use('/', routes.router);

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
})

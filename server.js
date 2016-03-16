'use strict';

const express = require('express');
const app = express();
const routes = require('./app/routes');
//const mongoose = require('mongoose');
const config = require('./app/config/index');
const PORT = process.env.PORT || 3000;

// mongoose.connect(config.dbURI, (err, db) => {
//   if (err) {
//     throw new Error('Error connecting to database');
//   }
//   console.log(config.dbURI);
//   console.log('Connected to nightlife database');
// });

// main app routes
app.use('/', routes.router);

app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
})

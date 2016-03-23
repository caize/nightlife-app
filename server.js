'use strict';

const express = require('express');
const app = express();
const nightLife = require('./app');
const routes = nightLife.routes;
const PORT = process.env.PORT || 3000;
const db = require('./app/db');
const config = require('./app/config/index');
const passport = require('passport');
const webpack = require('webpack');
const bodyParser = require('body-parser');

const isDevMode = (process.env.NODE_ENV !== 'production');

// // // Cross Domain requests
// let allowCrossDomain = function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
//
// //     // intercept OPTIONS method
// //     if ('OPTIONS' == req.method) {
// //       res.send(200);
// //     }
// //     else {
// //       next();
// //     }
// };
// app.use(allowCrossDomain);

if (isDevMode) {
  // Use Webpack Hot middleware in development
  (function() {

    // Create & configure a webpack compiler
    const webpack = require('webpack');
    const webpackConfig = require(process.cwd() + '/webpack-dev.config.js');
    const compiler = webpack(webpackConfig);

    // Attach the dev middleware to the compiler & the server
    app.use(require("webpack-dev-middleware")(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    app.use(require("webpack-hot-middleware")(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
  })();
}

// Session middleware
app.use(nightLife.session);
app.use(passport.initialize());
app.use(passport.session());

// Route middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Mount routes
app.use('/auth', routes.auth);
app.use('/api', routes.api);
app.use('/', routes.main);


app.listen(PORT, () => {
  console.log('App listening on port ' + PORT);
});

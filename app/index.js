/* Main App Index */
'use strict';

// Social Authentication Logic
require('./auth')();

module.exports = {
  routes: require('./routes'),
  session: require('./session')
}

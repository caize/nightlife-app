// TODO: get previous search if applicable
//       when creating a new user
'use strict';
const db = require('../');

// Find a single user based on a key
let findOne = profileId => {
  return db.userModel.findOne({
    'profileId': profileId,
  });
}

// Create a new user and return that instance

let createNewUser = profile => {
  return new Promise((resolve, reject) => {
    let newUser = new db.userModel({
      profileId: profile.id,
      fullName: profile.displayName,
      recentSearch: ''
    });

    newUser.save(error => {
      if (error) {
        reject(error);
      } else {
        resolve(newUser);
      }
    });
  });
}

module.exports = {
  findOne,
  createNewUser
}

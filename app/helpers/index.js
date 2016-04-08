// TODO: get previous search if applicable
//       when creating a new user
'use strict';
const db = require('../db');

/**** User Helpers ****/

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

// ES6 promisified version of findById
let findById = id => {
  return new Promise((resolve, reject) => {
    db.userModel.findById(id, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}

/**** Venue Helpers ****/

// Search for an existing venue
let findOneVenue = id => {
  return new Promise((resolve, reject) => {
    db.venueModel.findOne({ venueId: id }, (error, venue) => {
      if (error) {
        reject('Could not find Venue: ', error);
      } else {
        resolve(venue, ' found');
      }
    });
  });
}

//Add user to venue
let addUserToVenue = (venueId, userId) => {
  return new Promise((resolve, reject) => {
    db.venueModel.update(
      {venueId: venueId},
      { $addToSet: { userIds: userId}},
      ((err) => {
        if (err) {
          reject(err);
        } else {
          resolve('user added to venue attendees');
        }
      })
    );
  })
}

//remove user from venue
let removeUserFromVenue = (venueId, userId) => {
  return new Promise((resolve, reject) => {
    db.venueModel.update(
      {venueId: venueId},
      { $pull: {userIds: userId}},
      ((err) => {
        if (err) {
          reject(err);
        } else {
          resolve('user removed from venue attendees');
        }
      })
    );
  })
}

let addNewVenue = (venueId, userId) => {
  return new Promise((resolve, reject) => {
    let venue = new db.venueModel({
      venueId: venueId,
      userIds: [userId]
    });
    venue.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(venue);
      }
    });
  });
}

let getAllVenues = () => {
  return new Promise((resolve, reject) => {
    db.venueModel.find({}, (error, venues) => {
      if (error) {
        reject(error);
      } else {
        resolve(venues);
      }
    })
  });
}

module.exports = {
  findOne,
  createNewUser,
  findById,
  findOneVenue,
  addNewVenue,
  addUserToVenue,
  removeUserFromVenue,
  getAllVenues
}

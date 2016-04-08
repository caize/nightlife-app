import * as constants from '../constants';
import axios from 'axios';

// Venue actions


export function updateVenue(venueId) {
  return (dispatch) => {
    axios.get(`/venue/${venueId}`).then(response => {

    })
    .catch(e => {
      console.log(e);
    })
  }
}

function venueSuccess(venues) {
  return {
    type: constants.GET_VENUES,
    payload: venues
  }
}

export function getVenues(keyword) {
  let url = `/api/yelp/${keyword}`
  return (dispatch) => {
    axios.get(url).then(response => {
      let venues = response.data;
      console.log(venues);
      dispatch(venueSuccess(venues));
      dispatch(updateSearch(keyword));
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  }
}

function userLoggedIn(user) {
  return {
    type: constants.USER_LOGGED_IN,
    payload: user
  }
}

export function checkAuthenticated() {
  return (dispatch) => {
    axios.get('/users/current').then(user => {
      dispatch(userLoggedIn(user.data));
    })
    .catch(e => {
      console.log(e);
    })
  }
}

// Search Actions

export function updateSearch(term) {
  return {
    type: constants.UPDATE_SEARCH_TERM,
    payload: term
  }
}

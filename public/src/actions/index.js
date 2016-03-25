import * as constants from '../constants';
import axios from 'axios';

// Venue actions
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
      let venues = response.data.businesses;
      console.log(venues);
      dispatch(venueSuccess(venues));
      dispatch(updateSearch(keyword));
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  }
}

// Search Actions

function updateSearch(term) {
  return {
    type: constants.UPDATE_SEARCH_TERM,
    payload: term
  }
}

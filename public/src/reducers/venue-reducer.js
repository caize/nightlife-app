import {
  GET_VENUES,
  UPDATE_VENUE
} from '../constants/index';


const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_VENUES:
      return Object.assign({}, state, {all: action.payload});
    case UPDATE_VENUE:
      let newVenues = state.all.map(venue => {
        if (venue.id === action.payload.venueId) {
          venue.userIds = action.payload.userIds
        }
        return venue;
      });
      return Object.assign({}, state, {all: newVenues});
    default:
      return state;
  }
};

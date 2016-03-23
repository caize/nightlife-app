import {
  GET_VENUES
} from '../constants/index';


const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_VENUES:
      return Object.assign({}, state, {all: action.payload});
    default:
      return state;
  }
};

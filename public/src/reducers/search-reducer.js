import {
  UPDATE_SEARCH_TERM
} from '../constants/index';


const INITIAL_STATE = { currentTerm: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case UPDATE_SEARCH_TERM:
      return Object.assign({}, state, {currentTerm: action.payload});
    default:
      return state;
  }
};

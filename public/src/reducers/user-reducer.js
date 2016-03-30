import {
  USER_LOGGED_IN
} from '../constants/index';


const INITIAL_STATE = { info: null, loggedIn: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_LOGGED_IN:
      return Object.assign({}, {info: action.payload}, {loggedIn: true});
    default:
      return state;
  }
};

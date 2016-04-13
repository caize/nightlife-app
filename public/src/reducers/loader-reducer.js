import {
  IS_LOADING,
  DONE_LOADING
} from '../constants/index';


const INITIAL_STATE = { isLoading: false };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case IS_LOADING:
      return Object.assign({}, state, { isLoading: true});
    case DONE_LOADING:
      return Object.assign({}, state, { isLoading: false});
    default:
      return state;
  }
};

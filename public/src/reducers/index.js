import { combineReducers } from 'redux';
import venue from './venue-reducer';
import search from './search-reducer';
import user from './user-reducer';

const rootReducer = combineReducers({
  venue,
  search,
  user
});

export default rootReducer;

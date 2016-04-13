import { combineReducers } from 'redux';
import venue from './venue-reducer';
import search from './search-reducer';
import user from './user-reducer';
import loader from './loader-reducer';

const rootReducer = combineReducers({
  venue,
  search,
  user,
  loader
});

export default rootReducer;

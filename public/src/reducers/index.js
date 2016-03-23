import { combineReducers } from 'redux';
import venue from './venue-reducer';
import search from './search-reducer';

const rootReducer = combineReducers({
  venue,
  search
});

export default rootReducer;

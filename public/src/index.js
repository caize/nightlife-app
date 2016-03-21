import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style.scss';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import promise from 'redux-promise';
import App from './containers/App';

let store;

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    rootReducer, applyMiddleware(thunk, promise, logger())
  );
}

else {
  store = createStore(
    rootReducer, applyMiddleware(thunk, promise)
  );
}

ReactDOM.render(
  <App store={store}/>
, document.querySelector('#container'));



// Hot module reloading:

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {

  });
}

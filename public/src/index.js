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
  module.hot.accept('./reducers', () => {
    const nextRootReducer = () => {
      require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    }
  });

  // Hot module reloading:

  if (module.hot) {
    module.hot.accept();
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector('#container'));

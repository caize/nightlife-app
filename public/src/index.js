import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/style.scss';


const App = (props) => {
  return (
    <div>Hey I'm the app component</div>
  );
}


ReactDOM.render(<App />, document.getElementById('container'));



// Hot module reloading:

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {

  });
}

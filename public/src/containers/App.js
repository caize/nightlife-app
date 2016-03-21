import React from 'react';
import SearchBar from '../components/SearchBar';

const App = (props) => {
  return (
    <div className="main-app">
      <header>
        <h1>Unwind From The Grind</h1>
        <p>Your answer to what's going on tonight in your area</p>
      </header>
      <SearchBar />
    </div>
  );
}

export default App;

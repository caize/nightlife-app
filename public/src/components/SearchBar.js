import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-box">
        <input type="text"
          placeholder="Enter a location by city or zipcode"
          className="search-bar"
        />
        <button className="search-button">Go!</button>
      </div>
    );
  }
}

export default SearchBar;

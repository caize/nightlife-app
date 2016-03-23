import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSearch, getVenues } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.getVenues(this.props.currentTerm);
  }

  handleInputChange(e) {
    e.preventDefault();
    this.props.updateSearch(e.target.value);
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.handleSearch}>
          <input type="text"
            value={this.props.currentTerm}
            onChange={this.handleInputChange}
            placeholder="Enter a city or zipcode"
            className="search-bar"
          />
          <button
            type="submit"
            className="search-button"
          >
            Go!
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTerm: state.search.currentTerm
  };
}


export default connect(mapStateToProps, { updateSearch, getVenues })(SearchBar);

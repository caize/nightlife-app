import React, { Component } from 'react';
import { getVenues, checkAuthenticated } from '../actions';
import SearchBar from './SearchBar';
import VenueList from '../components/VenueList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    this.props.checkAuthenticated();
    this.props.getVenues('waukesha');
  }

  searchVenues(location) {
    this.props.getVenues(location);
  }

  render() {
    return (
      <div className="main-app">
        <header>
          <h1>Unwind From The Grind</h1>
          <p>Your answer to what's going on tonight in your area</p>
        </header>
        <SearchBar />
        {
          this.props.venues && this.props.venues.length > 0 ?
            <VenueList venues={ this.props.venues } />
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venue.all
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVenues: bindActionCreators(getVenues, dispatch),
    checkAuthenticated: bindActionCreators(checkAuthenticated, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

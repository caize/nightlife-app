import React, { Component } from 'react';
import { getVenues, checkAuthenticated } from '../actions';
import SearchBar from './SearchBar';
import VenueList from '../components/VenueList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    this.props.checkAuthenticated();
  }

  componentDidMount() {
    if (this.props.currentSearch) {
      this.props.getVenues(this.props.currentSearch);
    }
  }

  searchVenues(location) {
    this.props.getVenues(location);
  }

  render() {
    return (
      <div className="main-app">
        <div className="main-container">
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
        <footer>
          <div className="site-info">
            <a
              className="fa fa-github"
              href="https://github.com/chrisdziewa/nightlife-app"
              target="_blank"
            ></a>
            <p className="copyright">&copy;2016 Chris Dziewa</p>
            <img src="/img/yelp-btn.png" alt="Powered by Yelp"/>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venue.all,
    currentSearch: state.search.currentTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVenues: bindActionCreators(getVenues, dispatch),
    checkAuthenticated: bindActionCreators(checkAuthenticated, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

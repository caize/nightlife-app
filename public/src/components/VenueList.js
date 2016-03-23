import React,{ Component } from 'react';
import Venue from './Venue';

export default class VenueList extends Component {
  renderVenues() {
    return this.props.venues.map(venue => {
      return (
        <Venue
          key={venue.id}
          name={venue.name}
        />
      );
    });
  }

  render() {
    return (
      <div className="venue-list">
        {this.renderVenues()}
      </div>
    );
  }
}

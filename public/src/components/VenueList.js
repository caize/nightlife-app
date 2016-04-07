import React,{ Component } from 'react';
import Venue from './Venue';

export default class VenueList extends Component {
  renderVenues() {
    return this.props.venues.map(venue => {
      return (
        <Venue
          key={venue.id}
          id={venue.id}
          name={venue.name}
          img={venue.image_url}
          rating={venue.rating}
          ratingImg={venue.rating_img_url}
          ratingCount={venue.review_count}
          url={venue.url}
          text={venue.snippet_text}
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

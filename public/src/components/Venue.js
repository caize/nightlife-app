import React from 'react';

const Venue = (props) => {
  return (
    <li className="venue">
      <div className="venue-container">
        <h3>
          <a
            href={props.url}
            target="_blank"
          >
            {props.name}
          </a>
        </h3>
        <img
          className="venue-img"
          src={props.img}
          alt={'image of ' + props.name}
        />
        <div className="venue-info">
          <span>Rating: </span>
          <img src={props.ratingImg} alt={props.rating + ' stars'}/>
          <p
            className="review-count"
          >
            {props.ratingCount} reviews
          </p>

          <button className="num-going">0 going</button>
        </div>
        <div className="venue-review">
          <p className="text">{`"${props.text}"`}</p>
        </div>
      </div>
    </li>
  );
}

export default Venue;

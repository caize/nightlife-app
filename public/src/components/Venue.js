import React from 'react';

const Venue = (props) => {
  return (
    <li className="venue">
      <div>{props.name}</div>
    </li>
  );
}

export default Venue;

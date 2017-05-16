import React from 'react';

const LocationIndex = ({ locations }) => (
  <div>
    <h2>Locations: </h2>
    {locations.map(location => (
      <div></div>
    ))}

  </div>
);

export default LocationIndex;

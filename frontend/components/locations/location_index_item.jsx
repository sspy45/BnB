import React from 'react';

const LocationIndexItem = ({location}) => {
  return(
    <li>{location.id}: {location.title}</li>
  );
};

export default LocationIndexItem;

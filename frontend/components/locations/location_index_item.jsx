import React from 'react';

const LocationIndexItem = ({location}) => {
  console.log(location);
  return(
    <li>{location.id}: {location.title}</li>
  );
};

export default LocationIndexItem;

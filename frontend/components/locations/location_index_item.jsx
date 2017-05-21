import React from 'react';

const LocationIndexItem = ({location}) => {
  return(
    <section className="location-tile">
      <img src="http://www.iconsfind.com/wp-content/uploads/2015/11/20151125_5655088ba5cdf.png"></img>
      <p>{location.id}: {location.title}</p>
    </section>
  );
};

export default LocationIndexItem;

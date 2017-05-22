import React from 'react';

const BookingDetailItem = ({booking}) => {
  const {
    title,
    description,
    locationStreetAddress1,
    locationStreetAddress2,
    locationCity,
    locationState,
    locationZip,
    locationLat,
    locationLng,
    checkIn,
    checkOut
  } = booking;
  return(
  <section className="user-profile-container ">
    <h2>{title}</h2>
    <br/>
    <p>{description}</p>
    <p>{locationStreetAddress1} {locationStreetAddress2}</p>
    <p>{locationCity}, {locationState} {locationZip}</p>
    <br/>
    <h4>Check in: {checkIn.toString()}</h4>
    <h4>Check out: {checkOut}</h4>
  </section>
  );
};

export default BookingDetailItem;

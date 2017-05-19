import React from 'react';

const BookingDetailItem = ({booking}) => (
  <section>
    <ul>
      <li>City: {booking.city}</li>
      <li>Check in: {booking.check_in}</li>
      <li>Check out: {booking.check_out}</li>
      <li>Desc: {booking.description}</li>
    </ul>
  </section>
);

export default BookingDetailItem;

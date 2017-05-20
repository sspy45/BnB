import React from 'react';
import BookingDetailItem from './bookings_detail_item';
import { withRouter } from 'react-router';

class BookingsDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    const { currentUser } = this.props.session;
    this.props.fetchLocations(currentUser.id, 'rentals');
  }

  render(){
    return (
      <ul>
        {this.props.bookings.map(booking =>(
          <BookingDetailItem
            key={'booking-'+booking.id}
            key={'booking-'+booking.id}
            booking={booking} />
        ))}
      </ul>
    );
  }
}

export default BookingsDetail;

import React from 'react';
import { connect } from 'react-redux';
import { asArray } from '../../../reducers/selectors';
import BookingsDetail from './bookings_detail';
import { fetchBookingLocations } from '../../../actions/location_actions';
const mapStateToProps = ({session, user_details}) => {
  return {
    session,
    bookings: asArray(user_details.bookings) || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchBookingLocations: (id) => dispatch(fetchBookingLocations(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsDetail);

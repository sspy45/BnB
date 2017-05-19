import React from 'react';
import { connect } from 'react-redux';
import { convertBookings } from '../../../reducers/selectors';
import BookingsDetail from './bookings_detail';
import { fetchLocations } from '../../../actions/user_actions';

const mapStateToProps = (store) => {
  return {
    session: store.session,
    bookings: convertBookings(store.user_details)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocations: (id, type) => dispatch(fetchLocations(id, type))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsDetail);

import React from 'react';
import { connect } from 'react-redux';
import BookingFrom from './booking_form';
import { createBooking } from '../../../actions/location_actions.js';

const mapStateToProps = ({session}) => {
  const errors = session.errors || [];
  const currentUser = session.currentUser;
  return {
    currentUser,
    errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFrom);

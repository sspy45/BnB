import React from 'react';
import { connect } from 'react-redux';
import BookingFrom from './booking_form';
import { requestBooking } from '../../../../actions/booking_actions.js';

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
    requestBooking: pet => dispatch(requestBooking(pet))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFrom);

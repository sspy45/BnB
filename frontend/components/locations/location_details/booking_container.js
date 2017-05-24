import React from 'react';
import { connect } from 'react-redux';
import BookingFrom from './booking_form';
import { createBooking } from '../../../actions/location_actions.js';
import { fetchPets } from '../../../actions/user_actions.js';
import { asArray } from '../../../reducers/selectors.js';

const mapStateToProps = (state) => {
  const errors = state.session.errors || [];
  const currentUser = state.session.currentUser;
  const pets = asArray(state.user_details.pets) || [];
  return {
    currentUser,
    errors,
    pets
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBooking: (booking) => dispatch(createBooking(booking)),
    fetchPets: (id) => dispatch(fetchPets(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFrom);

import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchPets, fetchBookings, fetchLocations } from '../../actions/user_actions';
import User from './user';

const mapStateToProps = ({session, user_details}) => {
  return {
    session,
    user_details
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () =>dispatch(fetchUser()),
    fetchPets: (id) => dispatch(fetchPets(id)),
    fetchBookings: (id) => dispatch(fetchBookings(id)),
    fetchLocations: (id) => dispatch(fetchLocations(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

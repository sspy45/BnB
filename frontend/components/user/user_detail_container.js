import React from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchPets, fetchBookings } from '../../actions/user_actions';
import UserDetail from './user_detail';

const mapStateToProps = state => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () =>dispatch(fetchUser()),
    fetchPets: () => dispatch(fetchPets()),
    fetchBookings: () =>dispatch(fetchBookings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);

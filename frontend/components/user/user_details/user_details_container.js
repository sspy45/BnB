import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './user_details';

import { editUser, receiveErrors } from '../../../actions/session_actions';
const mapStateToProps = ({session}) => (
  {
    currentUser: session.currentUser,
    errors: session.errors || []
  }
);

const mapDispatchToProps = (dispatch) => ({
  editUser: (id) => dispatch(editUser(id)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);

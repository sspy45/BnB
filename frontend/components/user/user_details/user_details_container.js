import React from 'react';
import { connect } from 'react-redux';
import UserDetails from './user_details';

import { editUser } from '../../../actions/session_actions';
const mapStateToProps = (state) => (
  {
    session: state.session,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id) => dispatch(editUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);

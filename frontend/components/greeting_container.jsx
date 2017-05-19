import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, receiveErrors } from '../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

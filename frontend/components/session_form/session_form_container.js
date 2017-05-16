import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}) => {
  const loggedIn = Boolean(session.currentUser);
  const errors = session.errors;
  return {
    loggedIn,
    errors,
  };
};

const mapDispatchToProps = (dispatch, {formType}) => {
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

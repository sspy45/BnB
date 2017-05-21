import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavMenu from './nav_menu';

const mapDispatchToProps = (dispatch, {formType, closeModal}) => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    formType
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavMenu);

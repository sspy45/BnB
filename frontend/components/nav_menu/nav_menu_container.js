import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavMenu from './nav_menu';

const mapDispatchToProps = (dispatch, {formType}) => {
  return {
    logout: () => dispatch(logout()),
    formType
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavMenu);

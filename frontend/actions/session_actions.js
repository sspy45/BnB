import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => (dispatch) => (
  APIUtil.login(user)
    .then( _user => dispatch(receiveCurrentUser(_user)),
          errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const signup = (user) => (dispatch) => (
  APIUtil.signup(user)
    .then( _user => dispatch(receiveCurrentUser(_user)),
          errors => dispatch(receiveErrors(errors.responseJSON))
    )
);

export const logout = () => (dispatch) => {
  return APIUtil.logout()
    .then( _user => {
      dispatch(receiveCurrentUser(null));
  });
};

export const editUser = user => dispatch => (
  APIUtil.editUser(user)
    .then(_user => dispatch(receiveCurrentUser(_user)),
          errors => dispatch(receiveErrors(errors.responseJSON))
        )
);


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

import * as Session from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case Session.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      const newState1 = merge({}, state, {currentUser});
      return newState1;
    case Session.RECEIVE_ERRORS:
      const newState = merge({}, state);
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;

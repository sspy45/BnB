import { RECEIVE_PETS, RECEIVE_ERRORS, RECEIVE_BOOKINGS } from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  owner_id: '',
  type_id: '',
  name: '',
  desc: ''
};

const UserDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PETS:
      const pets = action.pets;
      newState = merge({}, state, {pets});
      return newState;
    case RECEIVE_BOOKINGS:
      const bookings = action.bookings;
      newState = merge({}, state, {bookings});
      return newState;
    default:
      return state;
  }
};

export default UserDetailReducer;

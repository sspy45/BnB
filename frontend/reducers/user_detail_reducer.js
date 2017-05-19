import {
  RECEIVE_PETS,
  RECEIVE_ERRORS,
  RECEIVE_BOOKINGS,
  RECEIVE_PET_TYPES,
  RECEIVE_NEW_PET,
  DELETE_PET
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  owner_id: '',
  type_id: '',
  name: '',
  desc: '',
  pets: [],
  bookings: [],
  pet_types: []
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
    case RECEIVE_PET_TYPES:
      const pet_types = action.pet_types;
      newState = merge({}, state, {pet_types});
      return newState;
    case RECEIVE_NEW_PET:
      newState = merge({}, state);
      newState.pets.push(action.pet);
      return newState;
    case DELETE_PET:
      newState = merge({}, state);
      debugger
      return newState;
    default:
      return state;
  }
};

export default UserDetailReducer;

import {
  RECEIVE_PET,
  RECEIVE_PETS,
  RECEIVE_ERRORS,
  RECEIVE_BOOKINGS,
  RECEIVE_PET_TYPES,
  RECEIVE_NEW_PET,
  DELETE_PET,
  RECEIVE_RENTAL_LOCATIONS,
  RECEIVE_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

const _defaultState = {
  owner_id: '',
  type_id: '',
  name: '',
  desc: '',
  pets: {},
  bookings: {},
  petTypes: []
};

const UserDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_PET:
      const pet = {[action.pet.id]: action.pet};
      return merge({}, state, {pets: pet});
    case RECEIVE_PETS:
      const pets = action.pets;
      newState = merge({}, state, {pets});
      return newState;
    case RECEIVE_BOOKINGS:
      const bookings = action.bookings;
      newState = merge({}, state, {bookings});
      return newState;
    case RECEIVE_PET_TYPES:
      const petTypes = action.petTypes;
      newState = merge({}, state, {petTypes});
      return newState;
    case RECEIVE_NEW_PET:
      const newPet = {[action.pet.id]: action.pet};
      newState = merge({}, state, {pets: newPet});
      return newState;
    case DELETE_PET:
      newState = merge({}, state);
      delete newState.pets[action.pet.id];
      return newState;
    default:
      return state;
  }
};

export default UserDetailReducer;

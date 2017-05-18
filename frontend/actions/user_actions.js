import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_USER,
  user
});

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const fetchUser = () => dispatch => {
  return APIUtil.fetchUser();
};
//TODO this is also wrong


export const fetchPets = user => dispatch => {
  return APIUtil.fetchPets(user)
    .then(pets => dispatch(receivePets(pets),
          errors => dispatch(receiveErrors(errors))));
};

export const fetchBookings = user => dispatch => {
  return APIUtil.fetchBookings(user)
    .then(bookings => dispatch(receiveBookings(bookings),
        errors => dispatch(receiveErrors(errors))));
};

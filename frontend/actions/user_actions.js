import * as APIUtil from '../util/user_api_util';

export const DELETE_PET = 'DELETE_PET';
export const RECEIVE_PET = 'RECEIVE_PET';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const RECEIVE_NEW_PET = 'RECEIVE_NEW_PET';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING_LOCATIONS = 'RECEIVE_LOCATIONS';

export const RECEIVE_PET_TYPES = 'RECEIVE_PET_TYPES';
//ACTIONS UP HERE

export const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

export const receivePetTypes = petTypes => ({
  type: RECEIVE_PET_TYPES,
  petTypes
});

export const receiveSinglePet = pet => ({
  type: RECEIVE_PET,
  pet
});

export const receiveNewPet = pet => ({
  type: RECEIVE_NEW_PET,
  pet
});

export const deletePet = pet => ({
  type: DELETE_PET,
  pet
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveBookingLocations = locations => ({
  type: RECEIVE_BOOKING_LOCATIONS,
  locations
});

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});


//THUNKS DOWN HERE

export const fetchPets = id => dispatch => {
  return APIUtil.fetchPets(id)
    .then(pets => dispatch(receivePets(pets)),
          errors => dispatch(receiveErrors(errors)));
};

export const editPet = pet => dispatch => (
  APIUtil.editPet(pet)
    .then(_pet => dispatch(receiveSinglePet(_pet)),
          errors => dispatch(receiveErrors(errors)))
);

export const fetchBookings = id => dispatch => {
  return APIUtil.fetchBookings(id)
    .then(bookings => dispatch(receiveBookings(bookings)),
        errors => dispatch(receiveErrors(errors)));
};

export const fetchLocations = (id, type) => dispatch => {
  return APIUtil.fetchLocations(id, type)
    .then(bookings => dispatch(receiveBookings(bookings)),
        errors => dispatch(receiveErrors(errors)));
};

export const fetchPetTypes = () => dispatch => {
  return APIUtil.fetchPetTypes()
    .then(_types => dispatch(receivePetTypes(_types)),
        errors => dispatch(receiveErrors(errors)));
};

export const createPet = (pet) => dispatch => {
  return APIUtil.createPet(pet)
    .then(_pet => dispatch(receiveNewPet(_pet)),
        errors => dispatch(receiveErrors(errors)));
};

export const removePet = (pet) => dispatch => {
  return APIUtil.removePet(pet)
    .then(_pet => dispatch(deletePet(_pet)),
      errors => dispatch(receiveErrors(errors)));
};

export const fetchBookingLocations = (id) => dispatch => (
  APIUtil.fetchBookingLocations(id)
    .then(locations => dispatch(receiveBookingLocations(locations, 'bookings')))
);

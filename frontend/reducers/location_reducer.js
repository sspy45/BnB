import {
  RECEIVE_LOCATIONS,
  RECEIVE_ALL_LOCATIONS,
  RECEIVE_LOCATION_REVIEWS,
  RECEIVE_SINGLE_LOCATION,
  RECEIVE_BOOKING_LOCATIONS,
  RECEIVE_BOOKING
 }from '../actions/location_actions';

import merge from 'lodash/merge';

const _defaultState = {
  locations: {},
  bookings: {},
  newBookings: {}
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type){
    case RECEIVE_LOCATIONS:
      let {locations, filter} = action;
      return merge({}, state, {locations:{[filter]:locations}});
    case RECEIVE_ALL_LOCATIONS:
      locations = action.locations;
      return merge({}, state, {locations});
    case RECEIVE_BOOKING_LOCATIONS:
      return merge({}, state, {[action.filter]: action.locations});
    case RECEIVE_LOCATION_REVIEWS:
      const reviews = action.reviews;
      return merge({}, state, {reviews});
    case RECEIVE_SINGLE_LOCATION:
      newState = merge({}, state);
      newState.local = action.location;
      return newState;
    case RECEIVE_BOOKING:
      newState = merge({}, state, {newBookings: action.booking});
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;

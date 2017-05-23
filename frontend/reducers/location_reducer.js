import {
  RECEIVE_LOCATIONS,
  RECEIVE_ALL_LOCATIONS,
  RECEIVE_LOCATION_REVIEWS,
  RECEIVE_SINGLE_LOCATION,
  RECEIVE_BOOKING_LOCATIONS
 }from '../actions/location_actions';

import merge from 'lodash/merge';

const _defaultState = {
  locations: {},
  bookings: {}
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
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
      const local = action.location;
      return merge({}, state, {local});
    default:
      return state;
  }
};

export default LocationReducer;

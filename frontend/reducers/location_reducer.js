import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION_REVIEWS,
  RECEIVE_SINGLE_LOCATION
 }from '../actions/location_actions';

import merge from 'lodash/merge';

const _defaultState = {
  locations: {}
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOCATIONS:
      const {locations, filter} = action;
      return merge({}, state, {locations: {[filter]:locations}});
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

import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION_REVIEWS
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
      // if(reviews){
      //   console.log("FOUND IN REDUCER");
      //   console.log({reviews});
      //   console.log(merge({}, state, {reviews}));
      // }
      return merge({}, state, {reviews});
    default:
      return state;
  }
};

export default LocationReducer;

import {
  RECEIVE_LOCATIONS,
  RECEIVE_ALL_LOCATIONS,
  RECEIVE_LOCATION_REVIEWS,
  RECEIVE_SINGLE_LOCATION,
  RECEIVE_BOOKING_LOCATIONS,
  RECEIVE_BOOKING,
  RECEIVE_LOCATION_BOOKINGS,
  RECEIVE_LOCATION_REVIEW
 }from '../actions/location_actions';
import moment from 'moment';
import merge from 'lodash/merge';

const _defaultState = {
  locations: {},
  bookings: {}
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;
  let reviews;
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
      reviews = action.reviews;
      newState = merge({}, state);
      newState.reviews = action.reviews;
      return newState;
    case RECEIVE_LOCATION_REVIEW:
      reviews = {[action.review.id]:action.review};
      return merge({}, state, {reviews});
    case RECEIVE_SINGLE_LOCATION:
      newState = merge({}, state);
      newState.local = action.location;
      return newState;
    case RECEIVE_BOOKING:
      let booking = action.booking;
      newState = merge({}, state, {bookings: {[booking.id]: action.booking}}  );
      return newState;
    case RECEIVE_LOCATION_BOOKINGS:
      newState = merge({}, state);
      let bookings = {};

      Object.keys(action.bookings).map(b => {
        bookings[moment(b).format('LL')] = true;
      });

      newState.bookings = bookings;
      return newState;
    default:
      return state;
  }
};

export default LocationReducer;

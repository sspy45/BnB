import {
  RECEIVE_LOCATION_REVIEWS,
  RECEIVE_ERRORS,

  // RECEIVE_LOCATION_REVIEWS,
  // RECEIVE_SINGLE_LOCATION
}from '../actions/review_actions';

import merge from 'lodash/merge';

const _defaultState = {
  locations: {}
};

const ReviewsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOCATION_REVIEWS:
      const reviews = action.reviews;
      return merge({}, state, {reviews});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default ReviewsReducer;

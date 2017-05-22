import * as APIUtil from '../util/review_api_util';

export const RECEIVE_LOCATION_REVIEWS = "RECEIVE_LOCATION_REVIEWS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveLocationReviews = reviews => ({
  type: RECEIVE_LOCATION_REVIEWS,
  reviews
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchLocationReviews = ({location}) => dispatch => (
  APIUtil.fetchLocationReviews(location)
  .then(reviews => dispatch(receiveLocationReviews(reviews)),
      errors => dispatch(receiveErrors(errors)))
);

import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_REVIEWS = 'RECEIVE_LOCATION_REVIEWS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const receiveLocationReviews = reviews => ({
  type: RECEIVE_LOCATION_REVIEWS,
  reviews
});

export const fetchLocations = (filters) => dispatch => (
  APIUtil.fetchLocations(filters)
    .then(locations => dispatch(receiveLocations(locations)))
);

export const fetchLocationReviews = (location) => dispatch => (
  APIUtil.fetchLocationReviews(location)
    .then(reviews => dispatch(receiveLocationReviews(reviews)))
);

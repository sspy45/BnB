import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_REVIEWS = 'RECEIVE_LOCATION_REVIEWS';

export const receiveLocations = (locations, filter) => ({
  type: RECEIVE_LOCATIONS,
  locations,
  filter
});

export const receiveLocationReviews = reviews => ({
  type: RECEIVE_LOCATION_REVIEWS,
  reviews
});

export const fetchLocations = (filter) => dispatch => (
  APIUtil.fetchLocations(filter)
    .then(locations => dispatch(receiveLocations(locations, filter)))
);

export const fetchLocationReviews = (location) => dispatch => (
  APIUtil.fetchLocationReviews(location)
    .then(reviews => dispatch(receiveLocationReviews(reviews)))
);

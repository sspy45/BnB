import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_ALL_LOCATIONS = 'RECEIVE_ALL_LOCATIONS';
export const RECEIVE_BOOKING_LOCATIONS = 'RECEIVE_BOOKING_LOCATIONS';
export const RECEIVE_LOCATION_REVIEWS = 'RECEIVE_LOCATION_REVIEWS';
export const RECEIVE_LOCATION_BOOKINGS = 'RECEIVE_LOCATION_BOOKINGS';
export const RECEIVE_SINGLE_LOCATION = 'RECEIVE_SINGLE_LOCATION';
export const CLEAR_LOCATION = 'CLEAR_LOCATION';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_LOCATION_REVIEW = "RECEIVE_LOCATION_REVIEW";

export const receiveLocations = (locations, filter) => ({
  type: RECEIVE_LOCATIONS,
  locations,
  filter
});

export const receiveAllLocations = (locations) => ({
  type: RECEIVE_ALL_LOCATIONS,
  locations
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const clearLocation = () => ({
  type: CLEAR_LOCATION
});

export const receiveBookingLocations = (locations, filter) => ({
  type: RECEIVE_BOOKING_LOCATIONS,
  locations,
  filter
});

export const receiveLocationReviews = reviews => ({
  type: RECEIVE_LOCATION_REVIEWS,
  reviews
});

export const receiveLocationBookings = bookings => ({
  type: RECEIVE_LOCATION_BOOKINGS,
  bookings
});

export const receiveSingleLocation = location => ({
  type: RECEIVE_SINGLE_LOCATION,
  location
});

export const receiveLocationReview = review => ({
  type: RECEIVE_LOCATION_REVIEW,
  review
});

export const fetchLocations = (filter) => dispatch => (
  APIUtil.fetchLocations(filter)
    .then(locations => dispatch(receiveLocations(locations, filter)))
);

export const createBooking = (booking) => dispatch => (
  APIUtil.createBooking(booking)
    .then(_booking => dispatch(receiveBooking(_booking)))
);

export const fetchAllLocations = () => dispatch => (
  APIUtil.fetchLocations('all')
    .then(locations => dispatch(receiveAllLocations(locations)))
);

export const fetchBookingLocations = (id) => dispatch => (
  APIUtil.fetchBookingLocations(id)
    .then(locations => dispatch(receiveBookingLocations(locations, 'bookings')))
);

export const fetchLocationReviews = (location) => dispatch => (
  APIUtil.fetchLocationReviews(location)
    .then(reviews => dispatch(receiveLocationReviews(reviews)))
);

export const fetchLocationBookings = (location) => dispatch => (
  APIUtil.fetchLocationBookings(location)
    .then(({bookings}) => dispatch(receiveLocationBookings(bookings)))
);

export const fetchSingleLocation = (id) => dispatch => (
  APIUtil.fetchSingleLocation(id)
    .then(local => dispatch(receiveSingleLocation(local)))
);

export const createReview = (review) => dispatch => (
  APIUtil.createReview(review)
    .then(_review => dispatch(receiveLocationReview(_review)))
);

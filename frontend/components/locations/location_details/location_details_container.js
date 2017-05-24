import React from 'react';
import { connect } from 'react-redux';
import LocationDetailsIndex from './location_details_index';
import { fetchSingleLocation, fetchLocationBookings } from '../../../actions/location_actions';
import { fetchLocationReviews } from '../../../actions/review_actions';

const mapStateToProps = ({locations}) => {
  return {
    local: locations.local,
    reviews: locations.reviews || {}
  };};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleLocation: (id) => dispatch(fetchSingleLocation(id)),
  fetchLocationReviews: (location) => dispatch(fetchLocationReviews(location)),
  fetchLocationBookings: (location) => dispatch(fetchLocationBookings(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetailsIndex);

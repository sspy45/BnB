import React from 'react';
import { connect } from 'react-redux';
import LocationDetails from './location_details';
import { fetchSingleLocation, clearLocation } from '../../actions/location_actions';
import { fetchLocationReviews } from '../../actions/review_actions';

const mapStateToProps = ({locations}) => {
  return {
    local: locations.local,
    reviews: locations.reviews || {}
  };};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleLocation: (id) => dispatch(fetchSingleLocation(id)),
  fetchLocationReviews: (location) => dispatch(fetchLocationReviews(location)),
  clearLocation: () => dispatch(clearLocation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetails);

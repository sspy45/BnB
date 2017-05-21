import React from 'react';
import { connect } from 'react-redux';
import LocationIndexItem from './location_index_item';
import { fetchLocationReviews } from '../../actions/location_actions';

const mapStateToProps = (state) => ({
  reviews: state.locations.reviews || {}
});

const mapDispatchToProps = (dispatch, {location}) => ({
  fetchLocationReviews: () => dispatch(fetchLocationReviews(location)),
  location
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationIndexItem);

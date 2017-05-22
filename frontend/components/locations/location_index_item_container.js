import React from 'react';
import { connect } from 'react-redux';
import LocationIndexItem from './location_index_item';
import { fetchLocationReviews } from '../../actions/location_actions';

const mapStateToProps = (state) => ({
  reviews: state.locations.reviews || {}
});

const mapDispatchToProps = (dispatch, {local}) => ({
  fetchLocationReviews: () => dispatch(fetchLocationReviews(local)),
  local
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationIndexItem);

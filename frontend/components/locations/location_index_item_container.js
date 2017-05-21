import React from 'react';
import { connect } from 'react-redux';
import LocationIndexItem from './location_index_item';
import { fetchReviews } from '../../actions/location_actions';

const mapDispatchToProps = (dispatch, location) => ({
  fetchReviews: () => dispatch(fetchReviews(location)),
  location: location.location
});

export default connect(
  null,
  mapDispatchToProps
)(LocationIndexItem);

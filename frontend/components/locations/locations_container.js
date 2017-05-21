import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import locationIndex from './location_index';

const mapStateToProps = state => {
  return {
    locations: state.locations,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, filter) => ({
  fetchLocations: () => dispatch(fetchLocations(filter)),
  filter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(locationIndex);

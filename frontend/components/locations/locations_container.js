import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import locationIndex from './location_index';

const mapStateToProps = ({session, locations}) => ({
  currentUser: session.currentUser,
  locations: locations.locations || {}
});

const mapDispatchToProps = (dispatch, {filter}) => ({
  fetchLocations: () => dispatch(fetchLocations(filter)),
  filter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(locationIndex);

import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations } from '../../actions/location_actions';
import locationSearch from './location_search';

const mapStateToProps = ({session, locations}) => {

  return {
    currentUser: session.currentUser,
    locations: locations.locations
  };
};

const mapDispatchToProps = (dispatch, {filter}) => ({
  fetchAllLocations: (species) => dispatch(fetchAllLocations(species)),
  filter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(locationSearch);

import React from 'react';
import { connect } from 'react-redux';
import { fetchAnimalLocations } from '../../actions/location_actions';
import locationIndex from './location_index';

const mapStateToProps = ({session, locations}) => {

  return {
    currentUser: session.currentUser,
    locations: locations.locations
  };
};

const mapDispatchToProps = (dispatch, {filter}) => ({
  fetchAnimalLocations: (species) => dispatch(fetchAnimalLocations(species)),
  filter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(locationIndex);

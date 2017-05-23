import React from 'react';
import { connect } from 'react-redux';
import { fetchAllLocations } from '../../actions/location_actions';
import Search from './search';

const mapStateToProps = ({session, locations}) => {
  return {
    currentUser: session.currentUser,
    locations: locations.locations || {}
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllLocations: () => dispatch(fetchAllLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

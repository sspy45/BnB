import React from 'react';
import { connect } from 'react-redux';
import { fetchAndReplace, fetchLocations } from '../../actions/location_actions';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = ({session, locations}) => {
  return {
    currentUser: session.currentUser,
    locations: locations.locations || {}
  };
};

const mapDispatchToProps = (dispatch, {query}) => ({
  updateFilter:(filter, value) => dispatch(updateFilter(filter, value)),
  fetchAndReplace: (filter) => dispatch(fetchAndReplace(filter)),
  fetchLocations: () => dispatch(fetchLocations())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

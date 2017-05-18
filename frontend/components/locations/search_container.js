import React from 'react';
import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

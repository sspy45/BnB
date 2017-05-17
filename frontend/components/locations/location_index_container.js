import React from 'react';
import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchLocations } from '../../actions/location_actions';
import LocationIndex from './location_index';

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
)(LocationIndex);

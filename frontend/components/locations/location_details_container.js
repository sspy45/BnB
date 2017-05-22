import React from 'react';
import { connect } from 'react-redux';
import LocationDetails from './location_details';
import { fetchSingleLocation } from '../../actions/location_actions';

const mapStateToProps = ({locations}) => {
  return {
    local: locations.local
  };};

const mapDispatchToProps = (dispatch) => ({
  fetchSingleLocation: (id) => dispatch(fetchSingleLocation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationDetails);

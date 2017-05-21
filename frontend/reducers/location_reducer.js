import { RECEIVE_LOCATIONS }from '../actions/location_actions';
import merge from 'lodash/merge';

const _defaultState = {
  locations: {}
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOCATIONS:
      const locations = action.locations;
      return merge({}, state, {locations});
    default:
      return state;
  }
};

export default LocationReducer;

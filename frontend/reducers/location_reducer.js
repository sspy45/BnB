import { RECEIVE_LOCATIONS }from '../actions/location_actions';
import merge from 'lodash/merge';

const _defaultState = {
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOCATIONS:
      return merge({}, state, action.locations);
    default:
      return state;
  }
};

export default LocationReducer;

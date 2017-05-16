import { RECEIVE_LOCATIONS }from '../actions/location_actions';
import merge from 'lodash/merge';

const _defaultState = {
  title: '',
  description: '',
  street_address1: '',
  street_address2: '',
  city: '',
  state: '',
  zip: '',
  lat: 0,
  lng: 0,
  ower_id: 0,
  archived: false
};

const LocationReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_LOCATIONS:
      return action.locations;
    default:
      return state;
  }
};

export default LocationReducer;

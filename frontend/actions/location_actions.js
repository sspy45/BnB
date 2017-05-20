import * as APIUtil from '../util/location_api_util';

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});


export const fetchLocations = (filters) => dispatch => {
  return APIUtil.fetchLocations(filters).then( locations => {
    return dispatch(receiveLocations(locations));
  });
};

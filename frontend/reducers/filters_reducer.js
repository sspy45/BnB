import merge from 'lodash/merge';

import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {}
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  let newState;
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      [action.filter]: action.value
    };
    newState = merge({}, state);
    newState[action.filter] = action.value;
    return newState;
  } else {
    return state;
  }
};

export default FiltersReducer;

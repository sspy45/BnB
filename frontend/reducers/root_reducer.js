import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LocationReducer from './location_reducer';
import UserDetailReducer from './user_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  locations: LocationReducer,
  user_details: UserDetailReducer
});

export default RootReducer;

import { combineReducers } from 'redux';
import { CHANGE_ROOMS } from '../actions';

function rooms(state = {rooms: []}, action) {
  switch(action.type) {
    case CHANGE_ROOMS:
      return state.rooms = action.rooms;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  rooms
});

export default rootReducer;

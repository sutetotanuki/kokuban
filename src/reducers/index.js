import { combineReducers } form 'redux';
import { CHANGE_ROOMS } from '../actions';

function rooms(state = {rooms: []}, action) {
  switch(action.type) {
  case CHANGE_ROOMS:
    return state.rooms = action.rooms;
  }
}

const rootReducer = combineReducers({
  rooms
});

export default rootReducer;

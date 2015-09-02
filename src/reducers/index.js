import { combineReducers } from 'redux';
import { CHANGE_ROOMS } from '../actions';

function rooms(state = {items: []}, action) {
  switch(action.type) {
    case CHANGE_ROOMS:
      return state.items = action.items;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  rooms
});

export default rootReducer;

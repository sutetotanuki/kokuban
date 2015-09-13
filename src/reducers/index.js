import { combineReducers } from 'redux';
import { CHANGE_ROOMS } from '../actions';

function rooms(state = {items: []}, action) {
  console.log(action);
  switch(action.type) {
    case CHANGE_ROOMS:
      return action.items;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  rooms
});

export default rootReducer;

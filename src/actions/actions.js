import * as types from '../constants/ActionTypes';

export function createRoom(name) {
  return { types.CREATE_ROOM, name };
}

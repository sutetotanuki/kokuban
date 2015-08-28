import * as types from '../constants/ActionTypes';

export const CHANGE_ROOMS = 'CHANGE_ROOMS';

export function createRoom(name) {
  return { types.CREATE_ROOM, name };
}

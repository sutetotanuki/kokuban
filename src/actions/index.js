export const CHANGE_ROOMS = 'CHANGE_ROOMS';
export const CREATE_ROOM = 'CREATE_ROOM';

export function createRoom(name) {
  return { type: CREATE_ROOM, name };
}

export function receiveChangeRooms(rooms) {
  return { type: CHANGE_ROOMS, rooms };
}

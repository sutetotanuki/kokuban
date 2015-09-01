export const CHANGE_ROOMS = 'CHANGE_ROOMS';

export function createRoom(name) {
  return { type: CHANGE_ROOMS, name };
}

export function receiveChangeRooms(rooms) {
  return { type: CHANGE_ROOMS, rooms };
}

export const CHANGE_ROOMS = 'CHANGE_ROOMS';

export function createRoom(name) {
  return { CREATE_ROOM, name };
}

export function receiveChangeRooms(rooms) {
  return { CHANGE_ROOMS, rooms };
}

import { createContext } from "react";
// import socket from "./socket.js";
import { CurrentRoomContextType, RoomContextType } from "../types.js";

const defaultRooms:RoomContextType = {
    rooms: [{name: 'Padrão', id: "user"}],
    setRooms: () => {}
}

const defaultCurrentRoom:CurrentRoomContextType = {
    currentRoom: {name: 'Padrão', id: "user"},
    setCurrentRoom: () => {}
}

export const CurrentRoomContext = createContext<CurrentRoomContextType>(defaultCurrentRoom);
export const RoomsContext = createContext<RoomContextType>(defaultRooms);
// export const

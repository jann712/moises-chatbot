import { createContext } from "react";
// import socket from "./socket.js";
import { CurrentRoomContextType, RoomContextType } from "../types.js";

export const CurrentRoomContext = createContext<CurrentRoomContextType | undefined>(undefined);
export const RoomsContext = createContext<RoomContextType | undefined>(undefined);
// export const

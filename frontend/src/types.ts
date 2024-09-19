
export type Room = {
    name: string
    id: string
}

export type Message = {
    message: string,
    id: string,
    room: string
}

export type RoomContextType = {
    rooms: Room[],
    setRooms: React.Dispatch<React.SetStateAction<Room[]>>
}

export type CurrentRoomContextType = {
    currentRoom: Room,
    setCurrentRoom: React.Dispatch<React.SetStateAction<Room>>
}
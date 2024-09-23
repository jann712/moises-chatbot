
type Parts = {
    text: string
}

export type Room = {
    name: string
    id: string
}

export type Message = {
    parts: Parts[],
    role: string
}

export type RoomContextType = {
    rooms: Room[],
    setRooms: React.Dispatch<React.SetStateAction<Room[]>>
}

export type CurrentRoomContextType = {
    currentRoom: Room,
    setCurrentRoom: React.Dispatch<React.SetStateAction<Room>>
}
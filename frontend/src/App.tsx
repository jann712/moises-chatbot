// import socket from "./lib/socket.ts";
// import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
// import { Room } from "./types.ts";
import Chat from "./components/Chat.tsx";
// import { CurrentRoomContext, RoomsContext } from "./lib/contexts.tsx";

function App() {
  // const firstRoom = { name: "Padrão", id: "user" };

  // const [rooms, setRooms] = useState<Room[]>([firstRoom]);

  // const [currentRoom, setCurrentRoom] = useState<Room>(firstRoom);

  return (
    // <CurrentRoomContext.Provider value={{ currentRoom, setCurrentRoom }}>
      // <RoomsContext.Provider value={{ rooms, setRooms }}>
          <div>
            <div className="grid grid-cols-7">
              <Sidebar />
              <Chat />
            </div>
          </div>
      // </RoomsContext.Provider>
    // {/* </CurrentRoomContext.Provider> */}
  );
}

export default App;

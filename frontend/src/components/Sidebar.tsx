// import React, { useContext, useState } from "react";
// import { CurrentRoomContext, RoomsContext } from "../lib/contexts.js";
// import { CurrentRoomContextType, RoomContextType } from "../types.js";
// import { v4 as uuidv4 } from "uuid";

export default function Sidebar() {
  // const [sidebarText, setSidebarText] = useState<string | undefined>();
  // const [formOpen, setForm] = useState(false);
  // const { rooms, setRooms } = useContext<RoomContextType>(RoomsContext!);
  // const { currentRoom, setCurrentRoom } = useContext<CurrentRoomContextType>(
  //   CurrentRoomContext!
  // );

  return (
    <div className="col-span-1 bg-slate-700 h-full p-6 [&>*]:text-white [&>*]:text-start">
      <div className="my-7 px-0 mx-0">
        <h1 className="font-normal text-md text-center ">🌊 moisés chatbot</h1>
      </div>
      {/* <div className="flex flex-col gap-2">
        {rooms.map((room, index) => {
          return (
            <button
              onClick={() => {
                setCurrentRoom(room);
              }}
              key={index}
              className={`max-h-6 w-full overflow-ellipsis hover:bg-slate-600 px-4 py-6 flex items-center justify-center ${
                room === currentRoom ? "font-bold bg-slate-600" : ""
              } rounded-lg transition`}
            >
              {room.name}
            </button>
          );
        })}
        {!formOpen ? (
          <div className="max-h-6 w-full overflow-ellipsis hover:bg-slate-600 px-4 py-6 flex items-center text-center justify-center rounded-lg transition">
            <button onClick={() => setForm(!formOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="flex justify-center flex-col bg-slate-600 p-3 rounded-lg transition">
            <input
              type="text"
              value={sidebarText}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSidebarText(e.target.value);
              }}
              className="text-slate-900 p-2 px-4 rounded-full focus:outline-0 my-3"
            />
            <div className="  w-full flex justify-center">
              <button
                onClick={() => {
                  setForm(!formOpen);
                  setRooms([...rooms, { name: sidebarText!, id: uuidv4() }]);
                  setCurrentRoom(rooms[-1]);
                  setSidebarText("");
                }}
                className="w-1/2 transition hover:bg-slate-500 rounded-full py-2 text-center antialiased font-semibold"
              >
                criar
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}

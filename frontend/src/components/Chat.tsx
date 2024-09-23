import { Message } from "../types";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { marked } from "marked";

export default function Chat() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  // const { currentRoom, setCurrentRoom } =
  //   useContext<CurrentRoomContextType>(CurrentRoomContext);

  async function fetchResponse(messages: Message[]) {
    const { data } = await axios.post(`${import.meta.env.VITE_SERVER_URL}/prompt`, messages);
    console.log(import.meta.env.VITE_SERVER_URL)

    const parsedData = await marked.parse(data);

    setMessages((messages) => [
      ...messages,
      { role: "model", parts: [{ text: parsedData }] },
    ]);
    // return data;
  }

  useEffect(() => {
    if (messages.length >= 1 && messages[messages.length - 1].role != "model")
      fetchResponse(messages);
  }, [messages]);

  return (
    <div className="col-span-6 px-12">
      <div className="h-screen">
        <div className="overflow-hidden  h-5/6 mt-6">
          <div className="py-8 px-12 overflow-y-auto flex-col-reverse flex h-full no-scrollbar">
            <ul className="flex flex-col gap-4">
              {messages.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      data.role == "user"
                        ? "flex-row-reverse [&>div]:ml-6 h-full"
                        : "flex-row [&>div]:mr-6 h-full"
                    }`}
                  >
                    {data.role == "user" ? (
                      <div className="text-xl border-4 p-2 rounded-full border-orange-500">
                        🧍
                      </div>
                    ) : (
                      <div className="text-xl border-4 p-2 rounded-full border-blue-500">
                        🌊
                      </div>
                    )}
                    {/* <li className={`${data.id == props.socket.id ? "bg-orange-50" : "bg-blue-50"} w-auto py-2 px-6 antialiased rounded-full  text-wrap max-h-32 overflow-ellipsis overflow-hidden`}>
                          {data.message}
                        </li> */}
                    {data.role == "user" ? (
                      <li
                        className={`"bg-orange-50 w-auto py-2 px-6 antialiased text-wrap max-h-32 overflow-ellipsis overflow-y-auto`}
                      >
                        {data.parts[0].text}
                      </li>
                    ) : (
                      <li
                        className={`"bg-blue-50 w-auto py-2 px-6 antialiased  text-wrap overflow-ellipsis overflow-y-auto`}
                      >
                        <Typewriter
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(`${data.parts[0].text}`)
                              .start();
                          }}
                          options={{
                            cursor: "",
                            delay: 10,
                          }}
                        />
                      </li>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-5 w-4/5 h-auto">
          <div className="flex justify-center w-full">
            <input
              id="chat-input"
              className="w-1/2 bg-slate-50 rounded-full px-5 mr-3 focus:outline-none focus:bg-blue-50 hover:bg-blue-100 transition"
              type="text"
              placeholder="Faça alguma pergunta..."
              value={text}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key == "Enter") {
                  setMessages((messages) => [
                    ...messages,
                    { role: "user", parts: [{ text: text }] },
                  ]);
                }
              }}
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key == "Enter") {
                  setText("");
                  // e.target.value = "";
                }
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e.target.value);
              }}
            />

            <button
              className="border-blue-100 hover:border-blue-200 transition-all border-2 rounded-full p-3"
              onClick={() => {
                // setMessages([...messages, text]);
                // socket.send({
                //   message: text,
                //   id: socket.id,
                //   room: currentRoom,
                // });
                // setMessages([...messages, {
                //   message: text,
                //   id: socket.id!
                // }])

                setMessages((messages) => [
                  ...messages,
                  { role: "user", parts: [{ text: text }] },
                ]);
                setText("");
                // console.dir(messages)
                // fetchResponse(messages!);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="lightblue"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

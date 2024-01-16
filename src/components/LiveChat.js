import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, getRandomQuote, makeRandomStrings } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.message)
    useEffect(()=>{
        const i= setInterval(()=>{
            // API Polling -> replace this with the data = fetch(), json = await data.json to fetch the results from backend
            dispatch(addMessage({
                name: generateRandomName(),
                message: getRandomQuote() + "😎"
            }))
        },200);
        return () => clearInterval(i);
    },[])

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {/* Don't use Indexes as Key */}
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="p-2 ml-2 w-full border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Me 😄",
            message: liveMessage
          }));
          setLiveMessage("")
        }}
      >
        <input
          type="text"
          className="p-2 w-60 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-4 bg-green-100 rounded-lg p-2">Send🚀</button>
      </form>
    </>
  );
}

export default LiveChat
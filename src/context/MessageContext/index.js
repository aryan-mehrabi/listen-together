import { createContext, useContext, useReducer } from "react";
import messageReducer from "./messageReducer";
import supabase from "auth/supabase";
import useUser from "context/UserContext";

const initVal = {};
const MessageContext = createContext(initVal);

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initVal);
  const { setUsers } = useUser();

  // ACTIONS
  const fetchMessages = async channelId => {
    const { data: messages, error } = await supabase
      .from("messages")
      .select(
        `
      id,
      created_at,
      channel_id,
      content,
      users (
        id,
        name,
        avatar
      )
      `
      )
      .eq("channel_id", channelId);
    if (!error) {
      dispatch({ type: "FETCH_MESSAGES", payload: { messages, channelId } });
      setUsers(messages);
    }
  };


  const value = {
    messages: state,
    fetchMessages,
  };
  return (
    <MessageContext.Provider {...{ value }}>{children}</MessageContext.Provider>
  );
};

const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error("useMessage should be use within its provider");
  }
  return context;
};

export default useMessage;

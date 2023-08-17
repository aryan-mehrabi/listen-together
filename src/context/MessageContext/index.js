import { createContext, useContext, useReducer } from "react";
import messageReducer from "./messageReducer";

const initVal = {};
const MessageContext = createContext(initVal);

export const MessageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initVal);

  const value = {
    messages: state,
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

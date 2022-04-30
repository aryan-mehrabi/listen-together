import React, { createContext, useContext } from "react";

const initValue = {};
const ChatRoomContext = createContext(initValue);

export const ChatRoomProvider = ({ children }) => {
  const value = {};
  return (
    <ChatRoomContext.Provider {...{ value }}>
      {children}
    </ChatRoomContext.Provider>
  );
};

const useChatRoom = () => {
  const context = useContext(ChatRoomContext);

  if (context === undefined) {
    throw new Error("useChatRoom should be use within its provider");
  }

  return context;
};

export default useChatRoom;

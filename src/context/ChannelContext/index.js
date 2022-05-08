import React, { createContext, useContext, useReducer } from "react";
import { createChannel } from "../../apis/firebase";
import channelReducer from "./channelReducer";
import useUser from "../UserContext";
import useAuth from "../AuthContext";

const initValue = {};
const ChatRoomContext = createContext(initValue);

export const ChannelProvider = ({ children, setIsModalOpen }) => {
  const { users } = useUser();
  const { userId } = useAuth();
  const [state, dispatch] = useReducer(channelReducer, initValue);

  //ACTIONS
  const createChatRoom = async name => {
    const channelData = {
      name,
      roles: {
        [userId]: "creator",
      },
    };
    try {
      await createChannel(users[userId], name, channelData);
      setIsModalOpen(false)
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    createChatRoom,
  };
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

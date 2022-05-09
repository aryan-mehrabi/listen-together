import React, { createContext, useContext, useReducer, useState } from "react";
import { createChannel as generateChannel } from "../../apis/firebase";
import channelReducer from "./channelReducer";
import useUser from "../UserContext";
import useAuth from "../AuthContext";

const initValue = {};
const ChannelContext = createContext(initValue);

export const ChannelProvider = ({ children, setIsModalOpen }) => {
  const { users } = useUser();
  const { userId } = useAuth();
  const [state, dispatch] = useReducer(channelReducer, initValue);
  const [selectedChannel, setSelectedChannel] = useState("");

  //ACTIONS
  const createChannel = async name => {
    const channelData = {
      name,
      roles: {
        [userId]: "creator",
      },
    };
    try {
      await generateChannel(users[userId], name, channelData);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const value = {
    selectedChannel,
    setSelectedChannel,
    ...state,
    createChannel,
  };
  return (
    <ChannelContext.Provider {...{ value }}>
      {children}
    </ChannelContext.Provider>
  );
};

const useChannel = () => {
  const context = useContext(ChannelContext);

  if (context === undefined) {
    throw new Error("usechannel should be use within its provider");
  }

  return context;
};

export default useChannel;

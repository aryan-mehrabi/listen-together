import React, { createContext, useContext, useReducer, useState } from "react";
import {
  createChannel as generateChannel,
  listenCollection,
  listenDocument,
  setDataId,
} from "../../apis/firebase";
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

  const listenChannel = async channelId => {
    const docUnsub = listenDocument("channels", channelId, data =>
      dispatch({ type: "FETCH_CHANNEL", payload: data })
    );
    const colUnsub = listenCollection(
      data =>
        dispatch({ type: "FETCH_MESSAGES", payload: { channelId, data } }),
      "channels",
      channelId,
      "messages"
    );
    return () => {
      docUnsub();
      colUnsub();
    };
  };

  const sendMessage = async message => {
    try {
      const messageData = {
        createdAt: Date.now(),
        content: message,
        from: userId,
        name: users[userId].name,
        avatar: users[userId].avatar,
      };
      await setDataId(messageData, "channels", selectedChannel, "messages");
    } catch (error) {
      console.log(error.message);
    }
  };

  // STORE
  const value = {
    channels: state,
    selectedChannel,
    setSelectedChannel,
    createChannel,
    listenChannel,
    sendMessage,
  };
  return (
    <ChannelContext.Provider {...{ value }}>{children}</ChannelContext.Provider>
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

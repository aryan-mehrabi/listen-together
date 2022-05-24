import React, { createContext, useContext, useReducer, useState } from "react";
import {
  addMemberToChannel,
  createChannel as generateChannel,
  listenCollection,
  listenDocument,
  queryCollection,
  removeMemberFromChannel,
  setDataId,
} from "../../apis/firebase";
import channelReducer from "./channelReducer";
import useUser from "../UserContext";
import useAuth from "../AuthContext";
import useModal from "../ModalContext";
import { getDocs } from "firebase/firestore";

const initValue = {};
const ChannelContext = createContext(initValue);

export const ChannelProvider = ({ children }) => {
  const { setModal } = useModal();
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
      await generateChannel(userId, channelData);
      setModal(null);
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

  const addMember = async userEmail => {
    const q = queryCollection("users", "email", "==", userEmail);
    try {
      const docs = await getDocs(q);
      if (docs.size) {
        const user = docs.docs[0].data();
        await addMemberToChannel(user.userId, state[selectedChannel]);
      } else {
        console.log("no doc");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const leaveChannel = async () => {
    try {
      await removeMemberFromChannel(userId, selectedChannel);
      dispatch({ type: "LEAVE_CHANNEL", payload: selectedChannel });
      setSelectedChannel("")
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
    addMember,
    leaveChannel,
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

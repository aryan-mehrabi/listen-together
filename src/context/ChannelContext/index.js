import React, { createContext, useContext, useReducer, useState } from "react";
import {
  addMemberToChannel,
  createChannel as generateChannel,
  listenDocument,
  listenQuery,
  queryByOrder,
  queryCollection,
  removeMemberFromChannel,
  setDataId,
  updateData,
  getQueryDocs,
} from "apis/firebase";
import channelReducer from "./channelReducer";
import useUser from "context/UserContext";
import useAuth from "context/AuthContext";
import useModal from "context/ModalContext";
import Alert from "components/Alert";

const initValue = {};
const statusInitValue = "idle";
const ChannelContext = createContext(initValue);

export const ChannelProvider = ({ children }) => {
  const { setModal } = useModal();
  const { users } = useUser();
  const { userId } = useAuth();
  const [state, dispatch] = useReducer(channelReducer, initValue);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [status, setStatus] = useState(statusInitValue);

  //ACTIONS
  const createChannel = async name => {
    const channelData = {
      name,
      roles: {
        [userId]: "creator",
      },
      track: "54kTO17-j_0",
      isPlaying: false,
      position: 0,
    };
    try {
      setStatus("loading")
      await generateChannel(userId, channelData);
      setModal(null);
      setStatus("idle")
    } catch (error) {
      setStatus("error")
      console.log(error.message);
    }
  };

  const listenChannel = async channelId => {
    const docUnsub = listenDocument(
      data => dispatch({ type: "FETCH_CHANNEL", payload: data }),
      error => console.log(error),
      "channels",
      channelId
    );
    const colUnsub = listenQuery(
      data =>
        dispatch({ type: "FETCH_MESSAGES", payload: { channelId, data } }),
      queryByOrder("createdAt", "channels", channelId, "messages")
    );
    return () => {
      docUnsub();
      colUnsub();
    };
  };

  const sendMessage = async message => {
    try {
      const messageData = {
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
      setStatus("loading")
      const docs = await getQueryDocs(q);
      if (docs.size) {
        const user = docs.docs[0].data();
        await addMemberToChannel(user.userId, state[selectedChannel]);
      } else {
        setModal(
          <Alert>We couldn't find any user with this email address.</Alert>
        );
      }
      setStatus("idle")
    } catch (error) {
      setStatus("error")
      console.log(error);
    }
  };

  const removeMember = async userId => {
    try {
      await removeMemberFromChannel(userId, selectedChannel);
    } catch (error) {
      console.log(error.message);
    }
  };

  const leaveChannel = async () => {
    try {
      await removeMemberFromChannel(userId, selectedChannel);
      dispatch({ type: "LEAVE_CHANNEL", payload: selectedChannel });
      setSelectedChannel("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const changeRole = async (userId, role) => {
    const update = {
      [`roles.${userId}`]: role,
    };
    try {
      await updateData(update, "channels", selectedChannel);
    } catch (error) {
      console.log(error.message);
    }
  };

  const playTrack = async position => {
    try {
      await updateData(
        { isPlaying: true, position },
        "channels",
        selectedChannel
      );
    } catch (error) {
      throw error;
    }
  };

  const pauseTrack = async () => {
    try {
      await updateData({ isPlaying: false }, "channels", selectedChannel);
    } catch (error) {
      throw error;
    }
  };

  const updateTrack = async track => {
    try {
      await updateData({ track }, "channels", selectedChannel);
    } catch (error) {
      throw error
    }
  };

  // STORE
  const value = {
    channels: state,
    status,
    selectedChannel,
    setSelectedChannel,
    createChannel,
    listenChannel,
    leaveChannel,
    sendMessage,
    addMember,
    removeMember,
    changeRole,
    playTrack,
    pauseTrack,
    updateTrack,
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

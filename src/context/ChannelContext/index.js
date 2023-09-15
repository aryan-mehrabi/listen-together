import React, { createContext, useContext, useReducer, useState } from "react";
import {
  listenDocument,
  listenQuery,
  queryByOrder,
  removeMemberFromChannel,
  updateData,
} from "apis/firebase";
import supabase from "auth/supabase";
import channelReducer from "./channelReducer";
import useAuth from "context/AuthContext";
import useModal from "context/ModalContext";

const initValue = {};
const statusInitValue = "idle";
const ChannelContext = createContext(initValue);

export const ChannelProvider = ({ children }) => {
  const { setModal } = useModal();
  const { userId } = useAuth();
  const [state, dispatch] = useReducer(channelReducer, initValue);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [status, setStatus] = useState(statusInitValue);

  //ACTIONS
  const createChannel = async name => {
    setStatus("loading");

    const channelData = {
      name,
      track: "54kTO17-j_0",
      is_playing: false,
      position: 0,
    };
    const { data, channelError } = await supabase
      .from("channels")
      .insert(channelData)
      .select()
      .single();
    if (channelError) {
      setStatus("error");
      return;
    }

    const memberData = {
      user_id: userId,
      channel_id: data.id,
      role: "creator",
    };
    const { memberError } = await supabase.from("members").insert(memberData);
    if (memberError) {
      setStatus("error");
      return;
    }

    setModal(null);
    setStatus("idle");
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

  const sendMessage = async content => {
    // try {
    //   const messageData = {
    //     content: message,
    //     from: userId,
    //     name: users[userId].name,
    //     avatar: users[userId].avatar,
    //   };
    //   await setDataId(messageData, "channels", selectedChannel, "messages");
    // } catch (error) {
    //   console.log(error.message);
    // }
    const message = {
      content,
      user_id: userId,
      channel_id: selectedChannel,
    };
    const { data, error } = await supabase
      .from("messages")
      .insert([message])
      .select();
  };

  const removeMember = async userId => {
    try {
      await removeMemberFromChannel(userId, selectedChannel);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeChannel = async channelId => {
    dispatch({ type: "DELETE_CHANNEL", payload: channelId });
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
      throw error;
    }
  };

  const setChannels = channels => {
    dispatch({ type: "FETCH_CHANNELS", payload: channels });
  };

  const fetchChannel = async channelId => {
    const { data, error } = await supabase
      .from("channels")
      .select("*")
      .eq("id", channelId)
      .single();
    if (!error) {
      dispatch({ type: "FETCH_CHANNEL", payload: data });
    }
  };

  // STORE
  const value = {
    channels: state,
    status,
    selectedChannel,
    setSelectedChannel,
    setStatus,
    createChannel,
    listenChannel,
    removeChannel,
    sendMessage,
    removeMember,
    changeRole,
    playTrack,
    pauseTrack,
    updateTrack,
    setChannels,
    fetchChannel,
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

import React, { createContext, useContext, useReducer, useState } from "react";
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
      is_playing: false,
      position: 0,
    };
    const { data, error: channelError } = await supabase
      .from("channels")
      .insert(channelData)
      .select()
      .single();
    if (channelError) {
      setStatus("idle");
      return;
    }

    const memberData = {
      user_id: userId,
      channel_id: data.id,
      role: "creator",
    };
    const { error: memberError } = await supabase
      .from("members")
      .insert(memberData);
    if (memberError) {
      setStatus("idle");
      return;
    }

    setModal(null);
    setStatus("idle");
  };

  const removeChannel = async channelId => {
    dispatch({ type: "DELETE_CHANNEL", payload: channelId });
  };

  const playTrack = async position => {
    await supabase
      .from("channels")
      .update({ is_playing: true, position })
      .eq("id", selectedChannel);
  };

  const pauseTrack = async () => {
    await supabase
      .from("channels")
      .update({ is_playing: false })
      .eq("id", selectedChannel);
  };

  const updateTrack = async track => {
    await supabase.from("channels").update({ track }).eq("id", selectedChannel);
  };

  const setChannels = channels => {
    dispatch({ type: "FETCH_CHANNELS", payload: channels });
  };

  const updateChannel = payload => {
    dispatch({ type: "UPDATE_CHANNEL", payload });
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
    removeChannel,
    playTrack,
    pauseTrack,
    updateTrack,
    setChannels,
    fetchChannel,
    updateChannel,
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

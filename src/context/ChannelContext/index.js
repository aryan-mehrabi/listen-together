import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useState,
} from "react";
import supabase from "auth/supabase";
import channelReducer from "./channelReducer";
import useModal from "context/ModalContext";
import { nanoid } from "nanoid";
import useAuth from "context/AuthContext";
import useTrack from "context/TrackContext";
import usePlaylist from "context/PlaylistContex";

const initValue = {};
const statusInitValue = "idle";
const ChannelContext = createContext(initValue);

export const ChannelProvider = ({ children }) => {
  const { userId } = useAuth();
  const { setModal } = useModal();
  const { setTracks, tracks } = useTrack();
  const { setPlaylists, playlists } = usePlaylist();
  const [state, dispatch] = useReducer(channelReducer, initValue);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [status, setStatus] = useState(statusInitValue);
  const [videoTitle, setVideoTitle] = useState("");
  const [playerState, setPlayerState] = useState(0);
  const player = useRef(null);

  //ACTIONS
  const createChannel = async (name) => {
    setStatus("loading");

    const channelData = {
      name,
      url: nanoid(12),
    };
    const { data } = await supabase.rpc("create_channel", channelData);

    setModal(null);
    setStatus("idle");
    setSelectedChannel(data.channels.id);
  };

  const updateChannelName = async (name) => {
    setStatus("loading");

    await supabase.from("channels").update({ name }).eq("id", selectedChannel);

    setStatus("idle");
  };

  const removeChannel = async (channelId) => {
    dispatch({ type: "DELETE_CHANNEL", payload: channelId });
  };

  const playTrack = async (position) => {
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

  const updateTrack = async (trackId) => {
    const playlist = playlists[selectedChannel];
    const track = tracks[selectedChannel];
    const { data } = await supabase
      .from("tracks")
      .insert({
        track_id: trackId,
        user_id: userId,
        playlist_id: playlist.id,
        position: track.position + 1,
      })
      .select()
      .single();
    await supabase
      .from("channels")
      .update({ track_id: data.id })
      .eq("id", selectedChannel);
  };

  const setChannels = (channels) => {
    dispatch({ type: "FETCH_CHANNELS", payload: channels });
  };

  const updateChannel = (payload) => {
    dispatch({ type: "UPDATE_CHANNEL", payload });
  };

  const fetchChannel = async (channelId) => {
    const { data, error } = await supabase
      .from("channels")
      .select(
        `id,
        created_at,
        track,
        position,
        name,
        is_playing,
        channel_invites (*),
        tracks(*),
        playlists!channels_playlist_id_fkey (*)
        `
      )
      .eq("id", channelId)
      .single();
    if (!error) {
      dispatch({ type: "FETCH_CHANNEL", payload: data });
      setPlaylists(data.playlists);
      setTracks(selectedChannel, data.tracks);
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
    player,
    videoTitle,
    setVideoTitle,
    playerState,
    setPlayerState,
    updateChannelName,
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

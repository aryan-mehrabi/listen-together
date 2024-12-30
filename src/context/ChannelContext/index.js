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

// const presenceObject = {
//   user_id,
//   playbackState,
// };

// const PLAYBACK_STATE = {
//   PLAYING: "PLAYING",
//   PAUSE: "PAUSE",
// };

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
  const channelPresence = useRef(null);

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

  const playTrack = async ({ position, duration }) => {
    await supabase
      .from("channels")
      .update({ is_playing: true, position, duration })
      .eq("id", selectedChannel);
  };

  const pauseTrack = async () => {
    await supabase
      .from("channels")
      .update({ is_playing: false })
      .eq("id", selectedChannel);
  };

  const updateTrack = async (trackId, { title, thumbnail } = {}) => {
    const playlist = playlists[selectedChannel];
    const track = state[selectedChannel].tracks;
    await supabase.rpc("play_track", {
      _track_id: trackId,
      _metadata: {
        title,
        thumbnail,
      },
      _playlist_id: playlist.id,
      _position: track.position,
      _channel_id: selectedChannel,
    });
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
        name,
        is_playing,
        start_at,
        duration,
        position,
        channel_invites (*),
        tracks(*),
        playlists!channels_playlist_id_fkey (*)
        `
      )
      .eq("id", channelId)
      .single();
    if (!error) {
      dispatch({
        type: "FETCH_CHANNEL",
        payload: { ...data, track_id: data.tracks.id },
      });
      if (data.playlists) {
        setPlaylists(data.playlists);
      }
      if (data.tracks) {
        setTracks(selectedChannel, data.tracks);
      }
    }
  };

  const subscribePresenceChannel = (channelId) => {
    channelPresence.current = supabase.channel(`room_${channelId}`);

    channelPresence.current
      .on("presence", { event: "sync" }, () => {
        const newState = channelPresence.current.presenceState();
        dispatch({
          type: "SET_CHANNEL_PRESENCE",
          payload: { id: selectedChannel, presence: newState },
        });
      })
      .subscribe();
  };

  const setChannelPresenceState = async (state) => {
    const presenceState = {
      user_id: userId,
      isListening: state,
    };

    return channelPresence.current.track(presenceState);
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
    subscribePresenceChannel,
    channelPresence,
    setChannelPresenceState,
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

import { createContext, useContext, useReducer } from "react";
import trackReducer from "./trackReducer";
import supabase from "auth/supabase";

const initValue = {};
const TrackContext = createContext(initValue);

export const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trackReducer, initValue);

  const setTracks = (channelId, data) => {
    dispatch({ type: "SET_TRACK", payload: { channelId, data } });
  };

  const fetchTracks = async (channelId, playlistId) => {
    try {
      const { data } = await supabase
        .from("tracks")
        .select("*")
        .eq("playlist_id", playlistId);
      dispatch({ type: "SET_TRACKS", payload: { channelId, data } });
    } catch (error) {
      console.error("Error fetching tracks", error);
    }
  };

  const subscribeTracksChannel = (playlistId, channelId) => {
    const tracksChannel = supabase
      .channel("tracks-channel-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "tracks",
          filter: `playlist_id=eq.${playlistId}`,
        },
        async (payload) => {
          if (payload.eventType === "INSERT") {
            setTracks(channelId, payload.new);
          }
          if (payload.eventType === "UPDATE") {
            fetchTracks(channelId, playlistId);
          }
          if (payload.eventType === "DELETE") {
            const { id } = payload.old;
            dispatch({
              type: "DELETE_TRACK",
              payload: { trackId: id, channelId },
            });
          }
        }
      )
      .subscribe();
    return () => supabase.removeChannel(tracksChannel);
  };

  const playNextTrack = async (id, selectedChannel) => {
    try {
      await supabase.rpc("play_next_track", {
        _channel_id: selectedChannel,
        _id: id,
      });
    } catch (error) {
      console.error("Error playing next track", error);
    }
  };

  // STORE
  const value = {
    tracks: state,
    setTracks,
    fetchTracks,
    playNextTrack,
    subscribeTracksChannel,
  };
  return (
    <TrackContext.Provider {...{ value }}>{children}</TrackContext.Provider>
  );
};

const useTrack = () => {
  const context = useContext(TrackContext);

  if (context === undefined) {
    throw new Error("useTrack should be use within its provider");
  }

  return context;
};

export default useTrack;

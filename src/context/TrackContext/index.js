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

  // STORE
  const value = {
    tracks: state,
    setTracks,
    fetchTracks,
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

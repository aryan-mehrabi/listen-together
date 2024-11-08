import { createContext, useContext, useReducer } from "react";
import trackReducer from "./trackReducer";

const initValue = {};
const TrackContext = createContext(initValue);

export const TrackProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trackReducer, initValue);

  const setTracks = (channelId, data) => {
    dispatch({ type: "SET_TRACKS", payload: { channelId, data } });
  };

  // STORE
  const value = {
    tracks: state,
    setTracks,
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

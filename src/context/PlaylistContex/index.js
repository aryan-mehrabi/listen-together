import { createContext, useContext, useReducer } from "react";
import playlistReducer from "./playlistReducer";

const initValue = {};
const PlaylistContext = createContext(initValue);

export const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playlistReducer, initValue);

  const setPlaylists = (payload) => {
    dispatch({ type: "SET_PLAYLISTS", payload });
  };

  // STORE
  const value = {
    playlists: state,
    setPlaylists,
  };
  return (
    <PlaylistContext.Provider {...{ value }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => {
  const context = useContext(PlaylistContext);

  if (context === undefined) {
    throw new Error("usePlaylist should be use within its provider");
  }

  return context;
};

export default usePlaylist;

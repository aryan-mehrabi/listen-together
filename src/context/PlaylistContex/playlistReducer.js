const playlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PLAYLISTS": {
      return { ...state, [payload.channel_id]: payload };
    }
    default:
      return state;
  }
};

export default playlistReducer;

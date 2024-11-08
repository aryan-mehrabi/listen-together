const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_TRACKS": {
      return { ...state, [payload.channelId]: payload.data };
    }
    default:
      return state;
  }
};

export default trackReducer;

const trackReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_TRACK": {
      return {
        ...state,
        [payload.channelId]: {
          ...state[payload.channelId],
          [payload.data.id]: payload.data,
        },
      };
    }
    case "SET_TRACKS": {
      const tracks = payload.data.reduce((acc, track) => {
        acc[track.id] = track;
        return acc;
      }, {});
      return {
        ...state,
        [payload.channelId]: {
          ...state[payload.channelId],
          ...tracks,
        },
      };
    }
    case "DELETE_TRACK": {
      const { [payload.trackId]: _, ...rest } = state[payload.channelId];
      return {
        ...state,
        [payload.channelId]: rest,
      };
    }
    default:
      return state;
  }
};

export default trackReducer;

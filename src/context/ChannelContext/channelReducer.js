const channelReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_CHANNEL":
      return { ...state, [payload.id]: payload };
    case "FETCH_CHANNELS":
      const channels = {};
      payload.forEach((channel) => {
        channels[channel.id] = channel;
      });
      return { ...state, ...channels };
    case "UPDATE_CHANNEL":
      return { ...state, [payload.id]: { ...state[payload.id], ...payload } };
    case "DELETE_CHANNEL":
      const { [payload]: a, ...newChannels } = state;
      return {
        ...newChannels,
      };
    case "SET_CHANNEL_PRESENCE":
      const { id, presence } = payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          presence: Object.values(presence).flat(),
        },
      };
    default:
      return state;
  }
};

export default channelReducer;

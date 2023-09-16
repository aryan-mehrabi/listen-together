const channelReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MESSAGES":
      const messages = {};
      payload.data.forEach(message => {
        messages[message.data().id] = { ...message.data() };
      });
      return {
        ...state,
        [payload.channelId]: {
          ...state[payload.channelId],
          messages: { ...messages },
        },
      };

    case "DELETE_CHANNEL":
      const { [payload]: a, ...newChannels } = state;
      return {
        ...newChannels,
      };
    case "FETCH_CHANNEL":
      return { ...state, [payload.id]: payload };
    case "FETCH_CHANNELS":
      const channels = {};
      payload.forEach(channel => {
        channels[channel.id] = channel;
      });
      return { ...state, ...channels };
    default:
      return state;
  }
};

export default channelReducer;

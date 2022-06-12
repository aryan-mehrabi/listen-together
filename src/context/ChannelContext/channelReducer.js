const channelReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_CHANNEL":
      return { ...state, [payload.id]: { ...state[payload.id], ...payload } };
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
    case "LEAVE_CHANNEL":
      const {
        newChannels,
        [payload]: { a },
      } = state;
      return {
        ...newChannels,
      };
    default:
      return state;
  }
};

export default channelReducer;

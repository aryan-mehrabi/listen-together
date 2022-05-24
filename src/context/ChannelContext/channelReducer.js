const channelReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_CHANNEL":
      return { ...state, [payload.id]: { ...state[payload.id], ...payload } };
    case "FETCH_MESSAGES":
      return {
        ...state,
        [payload.channelId]: {
          ...state[payload.channelId],
          messages: { ...payload.data },
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

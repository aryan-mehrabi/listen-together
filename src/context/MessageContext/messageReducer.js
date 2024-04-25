const messageReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MESSAGES":
      const messages = payload.messages.reduce((acc, message) => {
        return {
          ...acc,
          [message.id]: message,
        };
      }, {});
      return {
        ...state,
        [payload.channelId]: { ...state[payload.channelId], ...messages },
      };
    case "INSERT_MESSAGE":
      const { id, channel_id, client_id } = payload;
      const { [client_id]: _, ...otherMessages } = state[channel_id];
      return {
        ...state,
        [channel_id]: {
          ...otherMessages,
          [id || client_id]: payload,
        },
      };
    default:
      return state;
  }
};

export default messageReducer;

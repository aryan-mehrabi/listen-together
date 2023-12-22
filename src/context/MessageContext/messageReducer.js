const messageReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MESSAGES":
      const messages = payload.messages.reduce((acc, message) => {
        const { users, ...newMessage } = message;
        const modMessage = { ...newMessage, user_id: users.id };
        return { ...acc, [modMessage.id]: modMessage };
      }, {});
      return { ...state, [payload.channelId]: messages };
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

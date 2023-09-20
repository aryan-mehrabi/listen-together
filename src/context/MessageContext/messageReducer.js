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
      if (client_id in state[channel_id]) {
        delete state[channel_id][client_id];
      }
      return {
        ...state,
        [channel_id]: {
          ...state[channel_id],
          [id || client_id]: payload,
        },
      };
    default:
      return state;
  }
};

export default messageReducer;

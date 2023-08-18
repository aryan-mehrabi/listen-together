const messageReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MESSAGES":
      const messages = payload.messages.map(message => {
        const { users, ...newMessage } = message;
        return { ...newMessage, user_id: users.id };
      });
      return { ...state, [payload.channelId]: messages };
    default:
      return state;
  }
};

export default messageReducer;

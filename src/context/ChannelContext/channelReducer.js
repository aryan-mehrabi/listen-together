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

    case "FETCH_USERS_MEMBER":
      const newState = { ...state };
      payload.forEach(member => {
        const { id } = member.channels;
        if (!(id in newState)) {
          newState[id] = member.channels;
        }
      });
      return newState;
    case "GET_MEMBER_CHANNEL":
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default channelReducer;

const memberReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS_MEMBER":
      const members = {};
      payload.forEach(({ id, role, channels, user_id }) => {
        members[id] = {
          id,
          role,
          user_id,
          channel_id: channels.id,
        };
      });
      return { ...state, ...members };
    case "INSERT_MEMBER":
      return { ...state, [payload.id]: payload };
    case "UPDATE_MEMBER":
      return { ...state, [payload.id]: payload };
    case "DELETE_MEMBER":
      const { [payload.id]: deletedMember, ...remaining } = state;
      return remaining;
    case "FETCH_CHANNELS_MEMBER":
      const channelsMember = payload.reduce(
        (acc, { id, channel_id, role, users }) => ({
          ...acc,
          [id]: { id, channel_id, role, user_id: users.id },
        }),
        {}
      );
      return { ...state, ...channelsMember };
    default:
      return state;
  }
};

export default memberReducer;

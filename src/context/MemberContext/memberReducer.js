const memberReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USERS_MEMBER":
      const members = {};
      payload.forEach(({ id, role, channels, users }) => {
        members[id] = {
          id,
          role,
          channel_id: channels.id,
          user_id: users.id,
        };
      });
      return { ...state, ...members };
    case "INSERT_USERS_MEMBER" || "UPDATE_USERS_MEMBER":
      return { ...state, [payload.id]: payload };
    case "DELETE_USERS_MEMBER":
      const { [payload.id]: deletedMember, ...remaining } = state;
      return remaining;
    default:
      return state;
  }
};

export default memberReducer;

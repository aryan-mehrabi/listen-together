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
    case "FETCH_MEMBER_USER":
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default memberReducer;

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return {
        ...state,
        [payload.id]: { ...payload },
      };
    case "FETCH_USERS":
      const users = {};
      payload.forEach(message => {
        users[message.users.id] = message.users;
      });
      return { ...state, ...users };
    case "CREATE_USER":
      return { ...state, [payload.id]: payload };
    case "USER_NOT_FOUND":
      return { ...state, [payload]: {} };
    default:
      return state;
  }
};

export default userReducer;

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return { ...state, [payload.user_id]: {...payload, userId: payload.user_id} };
    case "CREATE_USER":
      return { ...state, [payload.userId]: payload };
    case "FETCH_USERS":
      const users = {};
      payload.forEach(user => {
        users[user.data().userId] = { ...user.data() };
      });
      return { ...state, ...users };
    case "USER_NOT_FOUND":
      return { ...state, [payload]: {} };
    default:
      return state;
  }
};

export default userReducer;

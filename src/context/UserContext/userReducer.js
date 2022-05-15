const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return { ...state, [payload.userId]: payload };
    case "CREATE_USER":
      return { ...state, [payload.userId]: payload };
    case "FETCH_USERS":
      return { ...state, ...payload };
    case "USER_NOT_FOUND":
      return { ...state, [payload]: {} };
    default:
      return state;
  }
};

export default userReducer;

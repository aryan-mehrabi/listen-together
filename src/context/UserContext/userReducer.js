const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return { ...state, [payload.userId]: payload };
    default:
      return state;
  }
};

export default userReducer;

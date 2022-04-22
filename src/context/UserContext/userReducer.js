const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_USER":
      return { ...state, [payload.userId]: payload };
    case "USER_NOT_FOUND":
      return {...state, [payload]: null}
    default:
      return state;
  }
};

export default userReducer;

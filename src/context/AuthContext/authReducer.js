const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return { ...state, userId: payload.userId, email: payload.email };
    case "LOG_OUT":
      return { ...state, userId: "", email: "" };
    default:
      return state;
  }
};

export default authReducer;
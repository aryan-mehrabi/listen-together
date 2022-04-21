const authReducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, userId: action.payload };
    case "LOG_OUT":
      return { ...state, userId: "" };
    default:
      return state;
  }
};

export default authReducer;
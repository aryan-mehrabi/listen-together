const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOG_IN":
      return { ...state, userId: payload.userId, email: payload.email };
    case "LOG_OUT":
      return { ...state, userId: "", email: "" };
    case "AUTH_ERROR":
      let error = payload.code;
      if (payload.code === "auth/network-request-failed") {
        error =
          "No internet connection. Make sure You have an active internet connection, and You're using VPN.";
      }
      return { ...state, error };
    case "AUTH_ERROR_DISMISS":
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default authReducer;

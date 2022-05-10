const chatRoomReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_CHANNEL":
      return {...state, [payload.id]: payload}
    default:
      return state;
  }
};

export default chatRoomReducer
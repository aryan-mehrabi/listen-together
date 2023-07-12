const memberReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MEMBER_USER":
      const newState = { ...state };
      payload.forEach(member => {
        const newMember = JSON.parse(JSON.stringify(member));
        delete newMember.channels.name;
        newState[newMember.id] = newMember;
      });
      return newState;
    default:
      return state;
  }
};

export default memberReducer;

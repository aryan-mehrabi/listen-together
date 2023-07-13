const memberReducer = (state, { type, payload }) => {
  switch (type) {
    case "FETCH_MEMBERS_USER":
      const newState = { ...state };
      payload.forEach(member => {
        const newMember = structuredClone(member);
        newMember.channel_id = member.channels.id;
        newMember.user_id = member.users.id;
        delete newMember.channels;
        delete newMember.users;
        newState[newMember.id] = newMember;
      });
      return newState;
    case "FETCH_MEMBER_USER":
      return { ...state, [payload.id]: payload };
    default:
      return state;
  }
};

export default memberReducer;

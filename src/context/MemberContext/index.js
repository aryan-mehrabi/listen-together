import { createContext, useContext, useReducer } from "react";
import memberReducer from "./memberReducer";
import useAuth from "context/AuthContext";
import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";

const initVal = {};
const MemberContext = createContext(initVal);

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initVal);
  const { userId } = useAuth();
  const { gotMembersUser, updatedMembers } = useChannel();

  // ACTIONS
  const subscribeMemberUser = async () => {
    const { data, error } = await supabase
      .from("members")
      .select(
        `
    id,
    role,
    channels (*),
    users (id)
    `
      )
      .eq("user_id", userId);
    if (!error) {
      dispatch({ type: "FETCH_MEMBERS_USER", payload: data });
      gotMembersUser(data);
    }

    const members = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "members",
          filter: "user_id=eq." + userId,
        },
        async payload => {
          if (payload.eventType === "INSERT") {
            dispatch({ type: "FETCH_MEMBER_USER", payload: payload.new });
            updatedMembers(payload.new.channel_id);
          }
        }
      )
      .subscribe();
  };
  const value = {
    members: state,
    subscribeMemberUser,
  };
  return (
    <MemberContext.Provider {...{ value }}>{children}</MemberContext.Provider>
  );
};

const useMember = () => {
  const context = useContext(MemberContext);
  if (context === undefined) {
    throw new Error("useMember should be use within its provider");
  }
  return context;
};

export default useMember;

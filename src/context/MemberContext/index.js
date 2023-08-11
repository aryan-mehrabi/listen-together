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
  const { setChannels, fetchChannel, channels, leaveChannel } = useChannel();

  // ACTIONS
  const fetchUsersMember = async () => {
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
      dispatch({ type: "FETCH_USERS_MEMBER", payload: data });
      setChannels(data.map(member => member.channels));
    }

    const tableDetail = {
      schema: "public",
      table: "members",
      filter: `user_id=eq.${userId}`,
    };
    return supabase
      .channel("users-member-channel")
      .on("postgres_changes", { event: "INSERT", ...tableDetail }, payload => {
        dispatch({ type: "INSERT_USERS_MEMBER", payload: payload.new });
        if (!(payload.new.channel_id in channels)) {
          fetchChannel(payload.new.channel_id);
        }
      })
      .on("postgres_changes", { event: "UPDATE", ...tableDetail }, payload => {
        dispatch({ type: "UPDATE_USERS_MEMBER", payload: payload.new });
      })
      .on("postgres_changes", { event: "DELETE", ...tableDetail }, payload => {
        dispatch({ type: "DELETE_USERS_MEMBER", payload: payload.old });
        leaveChannel(payload.old.channel_id);
      })
      .subscribe();
  };

  const value = {
    members: state,
    fetchUsersMember,
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

import { createContext, useContext, useReducer } from "react";
import memberReducer from "./memberReducer";
import useAuth from "context/AuthContext";
import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";

const initVal = {};
const MemberContext = createContext(initVal);

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initVal);
  const { userId } = useAuth();
  const { setChannels, fetchChannel, channels, removeChannel } = useChannel();
  const { setUsers, fetchUser, users } = useUser();

  // ACTIONS
  const fetchUsersMember = async () => {
    const { data, error } = await supabase
      .from("members")
      .select(
        `
    id,
    role,
    user_id,
    channels (*)
    `
      )
      .eq("user_id", userId);
    if (!error) {
      dispatch({ type: "FETCH_USERS_MEMBER", payload: data });
      setChannels(data.map(member => member.channels));
    }
  }
  const subscribeUsersMember = async () => {
    const tableDetail = {
      schema: "public",
      table: "members",
      filter: `user_id=eq.${userId}`,
    };
    const usersMemberChannel = supabase
      .channel("users-member-channel")
      .on("postgres_changes", { event: "INSERT", ...tableDetail }, payload => {
        dispatch({ type: "INSERT_MEMBER", payload: payload.new });
        if (!(payload.new.channel_id in channels)) {
          fetchChannel(payload.new.channel_id);
        }
      })
      .on("postgres_changes", { event: "UPDATE", ...tableDetail }, payload => {
        dispatch({ type: "UPDATE_MEMBER", payload: payload.new });
      })
      .on("postgres_changes", { event: "DELETE", ...tableDetail }, payload => {
        if (payload.old.user_id === userId) {
          dispatch({ type: "DELETE_MEMBER", payload: payload.old });
          removeChannel(payload.old.channel_id);
        }
      })
      .subscribe();
    return () => supabase.removeChannel(usersMemberChannel);
  };

  const fetchChannelsMember = async channelId => {
    const { data, error } = await supabase
      .from("members")
      .select(
        `
      id,
      channel_id,
      role,
      users (
        id,
        name,
        avatar
      )
      `
      )
      .eq("channel_id", channelId);
    if (!error) {
      setUsers(data);
      dispatch({ type: "FETCH_CHANNELS_MEMBER", payload: data });
    }
  };

  const subscribeChannelsMember = channelId => {
    const tableDetail = {
      schema: "public",
      table: "members",
      filter: `channel_id=eq.${channelId}`,
    };
    const channelsMember = supabase
      .channel("channels-member-channel")
      .on("postgres_changes", { event: "INSERT", ...tableDetail }, payload => {
        dispatch({ type: "INSERT_MEMBER", payload: payload.new });
        if (!(payload.new.user_id in users)) {
          fetchUser(payload.new.user_id);
        }
      })
      .on("postgres_changes", { event: "UPDATE", ...tableDetail }, payload => {
        dispatch({ type: "UPDATE_MEMBER", payload: payload.new });
      })
      .on("postgres_changes", { event: "DELETE", ...tableDetail }, payload => {
        dispatch({ type: "DELETE_MEMBER", payload: payload.old });
      })
      .subscribe();
    return () => supabase.removeChannel(channelsMember);
  };

  const value = {
    members: state,
    fetchUsersMember,
    subscribeUsersMember,
    fetchChannelsMember,
    subscribeChannelsMember,
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

import { createContext, useContext, useReducer } from "react";
import memberReducer from "./memberReducer";
import Alert from "components/Alert";
import useAuth from "context/AuthContext";
import supabase from "auth/supabase";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";
import useModal from "context/ModalContext";
import useEventCallback from "hooks/useEventCallback";

const initVal = {};
const MemberContext = createContext(initVal);

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initVal);
  const { userId } = useAuth();
  const {
    setChannels,
    fetchChannel,
    channels,
    removeChannel,
    selectedChannel,
    setSelectedChannel,
    setStatus,
  } = useChannel();
  const { setUsers, fetchUser, users } = useUser();
  const { setModal } = useModal();

  // ACTIONS
  const addMember = async (email) => {
    setStatus("loading");

    const { data, error } = await supabase.rpc("add_member", {
      user_email: email,
      target_channel_id: selectedChannel,
    });

    if (error) {
      setModal(<Alert>{error.message}</Alert>);
    } else {
      setModal(<Alert>{data}</Alert>);
    }

    setStatus("idle");
  };

  const changeRole = async (userId, role) => {
    await supabase.from("members").update({ role }).eq("user_id", userId);
  };

  const removeMember = async (userId) => {
    await supabase
      .from("members")
      .delete()
      .eq("user_id", userId)
      .eq("channel_id", selectedChannel);
  };

  const fetchUsersMember = async () => {
    const { data, error } = await supabase
      .from("members")
      .select(
        `
    id,
    role,
    user_id,
    channels (
    id,
    is_playing,
    name,
    track,
    created_at,
    position,
    channel_invites(*)
    )
    `
      )
      .eq("user_id", userId);
    if (!error) {
      dispatch({ type: "FETCH_USERS_MEMBER", payload: data });
      setChannels(data.map((member) => member.channels));
    }
  };
  const onDeleteUsersMember = useEventCallback(
    (payload) => {
      const deleted = state[payload.old.id] || {};
      if (deleted.user_id === userId) {
        dispatch({ type: "DELETE_MEMBER", payload: deleted });
        removeChannel(deleted.channel_id);
        if (selectedChannel === deleted.channel_id) {
          setSelectedChannel("");
        }
      }
    },
    [state]
  );
  const subscribeUsersMember = () => {
    const tableDetail = {
      schema: "public",
      table: "members",
      filter: `user_id=eq.${userId}`,
    };
    const usersMemberChannel = supabase
      .channel("users-member-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", ...tableDetail },
        (payload) => {
          dispatch({ type: "INSERT_MEMBER", payload: payload.new });
          if (!(payload.new.channel_id in channels)) {
            fetchChannel(payload.new.channel_id);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", ...tableDetail },
        (payload) => {
          dispatch({ type: "UPDATE_MEMBER", payload: payload.new });
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", ...tableDetail },
        onDeleteUsersMember
      )
      .subscribe();
    return () => supabase.removeChannel(usersMemberChannel);
  };

  const fetchChannelsMember = async (channelId) => {
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

  const subscribeChannelsMember = (channelId) => {
    const tableDetail = {
      schema: "public",
      table: "members",
      filter: `channel_id=eq.${channelId}`,
    };
    const channelsMember = supabase
      .channel("channels-member-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", ...tableDetail },
        (payload) => {
          dispatch({ type: "INSERT_MEMBER", payload: payload.new });
          if (!(payload.new.user_id in users)) {
            fetchUser(payload.new.user_id);
          }
        }
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", ...tableDetail },
        (payload) => {
          dispatch({ type: "UPDATE_MEMBER", payload: payload.new });
        }
      )
      .on(
        "postgres_changes",
        { event: "DELETE", ...tableDetail },
        (payload) => {
          dispatch({ type: "DELETE_MEMBER", payload: payload.old });
        }
      )
      .subscribe();
    return () => supabase.removeChannel(channelsMember);
  };

  const value = {
    members: state,
    addMember,
    changeRole,
    removeMember,
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

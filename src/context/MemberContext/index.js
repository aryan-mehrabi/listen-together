import { createContext, useContext, useReducer } from "react";
import memberReducer from "./memberReducer";
import useAuth from "context/AuthContext";
import supabase from "auth/supabase";

const initVal = {};
const MemberContext = createContext(initVal);

export const MemberProvider = ({ children }) => {
  const [state, dispatch] = useReducer(memberReducer, initVal);
  const { userId } = useAuth();

  // ACTIONS
  const subscribeUserMember = async () => {
    const { data, error } = await supabase
      .from("members")
      .select(
        `
    id,
    role,
    channels (
      id,
      name
    )
    `
      )
      .eq("user_id", userId);
    if (!error) {
      console.log(data);
    }
    // const members = supabase
    //   .channel("custom-all-channel")
    //   .on(
    //     "postgres_changes",
    //     {
    //       event: "*",
    //       schema: "public",
    //       table: "members",
    //       filter: "user_id=eq." + userId,
    //     },
    //     payload => {
    //       console.log("Change received!", payload);
    //     }
    //   )
    //   .subscribe();
  };
  const value = {
    members: state,
    subscribeUserMember,
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

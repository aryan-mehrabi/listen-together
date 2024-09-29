import React, { createContext, useReducer, useContext, useState } from "react";
import useAuth from "context/AuthContext";
import userReducer from "./userReducer";
import supabase from "auth/supabase";

const initValue = {};
const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initValue);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const { userId } = useAuth();

  // ACTIONS
  const createUser = async (name, avatar) => {
    const userData = {
      id: userId,
      name,
      avatar,
    };
    setStatus("loading");
    const { data } = await supabase.rpc("create_user", {
      user_name: name,
      user_avatar: avatar,
    });
    if (data && data.status === "success") {
      dispatch({
        type: "CREATE_USER",
        payload: { ...userData, username: data.username },
      });
      setStatus("idle");
    } else {
      setStatus("failed");
    }
  };

  const fetchUser = async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (error) {
      setError(error.message);
      return;
    }
    if (data) {
      dispatch({ type: "FETCH_USER", payload: data });
    } else {
      dispatch({ type: "USER_NOT_FOUND", payload: userId });
    }
  };

  const setUsers = (payload) => {
    dispatch({ type: "FETCH_USERS", payload });
  };

  const searchUser = async (searchString) => {
    const result = await supabase
      .from("users")
      .select("*")
      .like("username", `%${searchString}%`);
  };

  // STORE
  const value = {
    users: state,
    status,
    error,
    setError,
    createUser,
    fetchUser,
    setUsers,
    searchUser,
  };
  return <UserContext.Provider {...{ value }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth should be use within its provider");
  }

  return context;
};

export default useUser;

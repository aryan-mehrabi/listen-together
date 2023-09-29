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
  const { userId, email } = useAuth();

  // ACTIONS
  const createUser = async (name, avatar) => {
    const data = {
      id: userId,
      name,
      email,
      avatar,
    };
    setStatus("loading");
    const { error } = await supabase.from("users").insert(data);
    if (!error) {
      dispatch({ type: "CREATE_USER", payload: data });
      setStatus("idle");
    } else {
      setStatus("failed");
    }
  };

  const fetchUser = async userId => {
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

  const setUsers = payload => {
    dispatch({ type: "FETCH_USERS", payload });
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

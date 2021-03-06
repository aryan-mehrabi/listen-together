import React, { createContext, useReducer, useContext, useState } from "react";
import {
  setData,
  listenDocument,
  listenQuery,
  queryCollection,
} from "../../apis/firebase";
import useAuth from "../AuthContext";
import userReducer from "./userReducer";

const initValue = {};
const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initValue);
  const [error, setError] = useState("");
  const { userId, email } = useAuth();

  // ACTION CREATORS
  const listenChannelMembers = channelId => {
    listenQuery(
      data => dispatch({ type: "FETCH_USERS", payload: data }),
      queryCollection("users", `channels.${channelId}`, "!=", null)
    );
  };

  const listenUser = userId => {
    listenDocument(
      data => {
        if (data) {
          dispatch({ type: "FETCH_USER", payload: data });
        } else {
          dispatch({ type: "USER_NOT_FOUND", payload: userId });
        }
      },
      error => {
        setError(error.message)
      },
      "users",
      userId
    );
  };

  const createUser = async (name, seed) => {
    const data = {
      name,
      email,
      userId,
      avatar: `https://avatars.dicebear.com/api/human/${seed}.svg`,
    };
    try {
      await setData(data, "users", userId);
      dispatch({ type: "CREATE_USER", payload: data });
    } catch (error) {
      console.log("error4");
    }
  };

  // STORE
  const value = {
    users: state,
    error,
    setError,
    createUser,
    listenUser,
    listenChannelMembers,
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

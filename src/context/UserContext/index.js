import React, { createContext, useReducer, useContext, useEffect } from "react";
import {
  setData,
  getData,
  listenDocument,
  queryListener,
  queryCollection,
} from "../../apis/firebase";
import useAuth from "../AuthContext";
import userReducer from "./userReducer";

const initValue = {};
const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initValue);
  const { userId, email } = useAuth();

  useEffect(() => {
    if (userId) {
      listenDocument("users", userId, listenUser);
    }
  }, [userId]);

  // ACTION CREATORS
  const listenChannelMembers = channelId => {
    queryListener(
      data => dispatch({ type: "FETCH_USERS", payload: data }),
      queryCollection("users", `channels.${channelId}`, "!=", null)
    );
  };

  const listenUser = data => {
    if (data) {
      dispatch({ type: "FETCH_USER", payload: data });
    } else {
      dispatch({ type: "USER_NOT_FOUND", payload: userId });
    }
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

  const fetchUser = async uid => {
    try {
      const result = await getData("users", uid);
      if (result === "Not Found") {
        dispatch({ type: "USER_NOT_FOUND", payload: uid });
      } else {
        dispatch({ type: "FETCH_USER", payload: result });
      }
    } catch (error) {
      console.log("error3");
    }
  };

  // STORE
  const value = {
    users: state,
    createUser,
    fetchUser,
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

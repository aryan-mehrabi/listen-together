import React, { createContext, useReducer, useContext, useEffect } from "react";
import { setData, getData } from "../../apis/firebase";
import useAuth from "../AuthContext";
import userReducer from "./userReducer";

const initValue = {};
const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initValue);
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);

  // ACTION CREATORS
  const createUser = async (uid, data) => {
    try {
      await setData("users", uid, data);
      dispatch({ type: "CREATE_USER", payload: data });
    } catch (error) {
      throw error;
    }
  };
  const fetchUser = async uid => {
    const result = await getData("users", uid);
    if (result === "Not Found") {
      dispatch({ type: "USER_NOT_FOUND", payload: uid });
    } else {
      dispatch({ type: "FETCH_USER", payload: result });
    }
  };

  // STORE
  const value = {
    users: state,
    createUser,
    fetchUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useAuth should be use within its provider");
  }

  return context;
};

export default useUser;

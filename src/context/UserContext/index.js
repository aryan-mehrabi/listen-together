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
      fetchUser(userId)
    }
  } ,[userId])

  // ACTION CREATORS
  const createUser = async (uid, data) => {
    await setData("users", uid, data).catch(error => {
      throw error;
    });
  };
  const fetchUser = async uid => {
    getData("users", uid);
  };


  // STORE
  const value = {
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

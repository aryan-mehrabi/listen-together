import React, { createContext, useReducer } from "react";
import userReducer from "./userReducer";

const initValue = {};
const UserContext = createContext(initValue);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initValue);
  const value = {};
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

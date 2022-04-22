import React, { createContext, useReducer, useContext, useEffect } from "react";
import authReducer from "./authReducer";
import { logIn, logOut } from "../../auth/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initValue = { userId: null, email: null };
const AuthContext = createContext(initValue);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initValue);

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        dispatch({
          type: "LOG_IN",
          payload: { userId: user.uid, email: user.email },
        });
      } else {
        dispatch({ type: "LOG_OUT" });
      }
    });
  }, []);

  const value = {
    ...state,
    logIn,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth should be use within its provider");
  }

  return context;
};

export default useAuth;

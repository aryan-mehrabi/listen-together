import React, { createContext, useReducer, useContext, useEffect } from "react";
import authReducer from "./authReducer";
import { tryLogInAnonymous, tryLogIn, tryLogOut } from "auth/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initValue = { userId: null, email: null, error: "" };
const AuthContext = createContext(initValue);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initValue);

  useEffect(() => {
    onAuthStateChanged(getAuth(), user => {
      if (user) {
        dispatch({
          type: "LOG_IN",
          payload: { userId: user.uid, email: user.email || user.uid },
        });
      } else {
        dispatch({ type: "LOG_OUT" });
      }
    });
  }, []);

  //ACTIONS
  const logInAnonymous = async () => {
    try {
      await tryLogInAnonymous();
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "AUTH_ERROR", payload: error });
    }
  };
  const logIn = async () => {
    try {
      await tryLogIn();
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "AUTH_ERROR", payload: error });
    }
  };
  const logOut = async () => {
    try {
      await tryLogOut();
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error });
    }
  };
  const dismissError = () => {
    dispatch({ type: "AUTH_ERROR_DISMISS" });
  };

  const value = {
    ...state,
    logInAnonymous,
    logIn,
    logOut,
    dismissError,
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

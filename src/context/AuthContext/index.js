import React, { createContext, useReducer, useContext, useEffect } from "react";
import authReducer from "./authReducer";
import {
  tryLogInAnonymous,
  tryLogIn,
  tryLogOut,
  authStateChanged,
} from "auth/firebase";
import supabase from "auth/supabase";

const initValue = { userId: null, email: null, error: "" };
const AuthContext = createContext(initValue);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initValue);

  // useEffect(() => {
  //   authStateChanged(user => {
  //     if (user) {
  //       dispatch({
  //         type: "LOG_IN",
  //         payload: { userId: user.uid, email: user.email || user.uid },
  //       });
  //     } else {
  //       dispatch({ type: "LOG_OUT" });
  //     }
  //   });
  // }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        const { id, email } = session.user;
        dispatch({
          type: "LOG_IN",
          payload: { userId: id, email },
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
      await supabase.auth.signInWithOAuth({ provider: "google" });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "AUTH_ERROR", payload: error });
    }
  };
  const logOut = async () => {
    try {
      await supabase.auth.signOut();
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

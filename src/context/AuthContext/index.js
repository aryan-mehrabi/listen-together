import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import authReducer from "./authReducer";
import supabase from "auth/supabase";
import { randomHash } from "helpers";

const initValue = { userId: null, email: null, error: "" };
const AuthContext = createContext(initValue);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      if (session) {
        const { id, email } = session.user;
        dispatch({
          type: "LOG_IN",
          payload: { userId: id, email },
        });
      } else {
        dispatch({ type: "LOG_OUT" });
      }
      setIsLoading(false);
    });
  }, []);

  //ACTIONS
  const logInAnonymous = async () => {
    setIsLoading("anon");
    await supabase.auth.signUp({
      email: `${randomHash(36)}@listen-together-aryan.netlify.app`,
      password: "example-password",
    });
  };
  const logIn = async () => {
    setIsLoading("google");
    const urlParams = new URLSearchParams(window.location.search);
    const invite = urlParams.get("invite");
    try {
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.href}` },
      });
    } catch (error) {
      dispatch({ type: "AUTH_ERROR", payload: error });
    }
  };
  const logOut = async () => {
    setIsLoading(true);
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
    isLoading,
    setIsLoading,
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

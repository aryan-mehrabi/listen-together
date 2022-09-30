import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signOut,
  signInWithRedirect,
  signInAnonymously,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const tryLogInAnonymous = async () => {
  await signInAnonymously(auth);
};

export const tryLogIn = async () => {
  await signInWithRedirect(auth, provider);
};

export const tryLogOut = async () => {
  await signOut(auth);
};

export const authStateChanged = (action) => {
  onAuthStateChanged(getAuth(), action);
};

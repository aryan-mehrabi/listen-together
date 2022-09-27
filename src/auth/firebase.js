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
  apiKey: "AIzaSyArp9Ty5-TJVGoEGsAnfbRBDKdH8_IblsM",
  authDomain: "listen-together-2331f.firebaseapp.com",
  projectId: "listen-together-2331f",
  storageBucket: "listen-together-2331f.appspot.com",
  messagingSenderId: "466158373050",
  appId: "1:466158373050:web:3f4835c3d83ba790705a83",
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

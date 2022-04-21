import { initializeApp } from "firebase/app";
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArp9Ty5-TJVGoEGsAnfbRBDKdH8_IblsM",
  authDomain: "listen-together-2331f.firebaseapp.com",
  projectId: "listen-together-2331f",
  storageBucket: "listen-together-2331f.appspot.com",
  messagingSenderId: "466158373050",
  appId: "1:466158373050:web:3f4835c3d83ba790705a83",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const logIn = async () => {
  signInWithPopup(auth, provider).catch(error => {
    const errorMessage = error.message;
    throw errorMessage;
  });
};

export const logOut = async () => {
  signOut(auth).catch(error => {
    throw error;
  });
};

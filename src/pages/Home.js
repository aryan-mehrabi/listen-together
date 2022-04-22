import React, { useEffect } from "react";
import heroImage from "../assets/hero-section.jpg";
import styles from "./home.module.css";
import useAuth from "../context/AuthContext";
import useUser from "../context/UserContext";

const Home = () => {
  const { logIn, userId, email } = useAuth();
  const { createUser, fetchUser, users } = useUser()
  console.log(userId)
  return (
    <div
      style={{ backgroundImage: `url('${heroImage}')` }}
      className={styles.container}
    >
      <h1 className="text-6xl m-3">LET'S LISTEN TOGETHER</h1>
      <p className="text-lg">
        listen to your favorite music synchornously with your friends and talk
        about it.
      </p>
      <button onClick={logIn} className={styles.button}>
        <i className="fa-brands fa-google"></i>Sign in with Google
      </button>
      <button onClick={() => createUser(userId, {userId, email})}>createUser</button>
      <button onClick={() => fetchUser(userId)}>fetchUser</button>
    </div>
  );
};

export default Home;

import React from "react";
import heroImage from "../assets/hero-section.jpg";
import useAuth from "../context/AuthContext";

const Home = () => {
  const { logIn } = useAuth();

  return (
    <div
      style={{ backgroundImage: `url('${heroImage}')` }}
      className="bg-cover bg-blend-overlay bg-center h-full bg-primary 
      flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-5xl md:text-6xl m-3">LET'S LISTEN TOGETHER</h1>
      <p className="text-base md:text-lg mx-3">
        listen to your favorite music synchornously with your friends and talk
        about it.
      </p>
      <button
        onClick={logIn}
        className="bg-secondary text-primary text-base md:text-lg font-semibold rounded-sm p-3 m-10"
      >
        <i className="fa-brands fa-google pr-3"></i>Sign in with Google
      </button>
    </div>
  );
};

export default Home;

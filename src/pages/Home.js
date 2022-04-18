import React from "react";
import heroImage from "../assets/hero-section.jpg";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url('${heroImage}')` }}
      className="bg-[#141414] bg-cover bg-blend-overlay bg-center text-[#E6ECEF] 
      flex flex-col justify-center items-center h-screen"
    >
      <h1 className="text-6xl m-3">LET'S LISTEN TOGETHER</h1>
      <p className="text-lg">
        listen to your favorite music synchornously with your friends and talk
        about it.
      </p>
      <button className="bg-secondary text-primary text-lg font-semibold rounded-sm p-3 m-10">
        <i className="fa-brands fa-google pr-3"></i>Sign in with Google
      </button>
    </div>
  );
};

export default Home;

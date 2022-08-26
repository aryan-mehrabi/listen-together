import React from "react";
import heroImage from "assets/hero-section.jpg";
import useAuth from "context/AuthContext";
import useError from "hooks/useError";

const Landing = () => {
  const { logInAnonymous, logIn, error, dismissError } = useAuth();
  const errorComponent = useError(error, dismissError);

  return (
    <div
      style={{ backgroundImage: `url('${heroImage}')` }}
      className="bg-cover bg-blend-overlay bg-center h-full bg-primary 
      flex flex-col justify-center items-center text-center"
    >
      {errorComponent}
      <div>
        <h1 className="text-5xl md:text-6xl m-3">LET'S LISTEN TOGETHER</h1>
        <p className="text-base md:text-lg mx-3">
          Listen to your favorite music synchornously and discuss it with your
          friends.
        </p>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-5 text-primary md:text-lg m-10">
          <button
            onClick={logIn}
            className="bg-secondary rounded-sm p-3 font-semibold"
          >
            <i className="fa-brands fa-google pr-3"></i>Sign in with Google
          </button>
          <button
            onClick={logInAnonymous}
            className="bg-secondary rounded-sm p-3 font-semibold"
          >
            <i className="fa-solid fa-user pr-2"></i> Sign in Anonymously
          </button>
        </div>
      </div>
      <footer className="absolute w-full bottom-0 left-0 flex justify-center">
        <a
          target="_blank"
          href="https://github.com/aryan-mehrabi/listen-together"
          className="text-2xl mx-4 my-4 p-1"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/aryan-mehrabi/"
          className="text-2xl mx-4 my-4 p-1"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="mailto:aryan.me77@yahoo.com"
          className="text-2xl mx-4 my-4 p-1"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
      </footer>
    </div>
  );
};

export default Landing;

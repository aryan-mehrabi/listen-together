import React, { useState } from "react";
import useUser from "../context/UserContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [seed, setSeed] = useState(Math.random());
  const [gender, setGender] = useState("human");
  const { createUser, status } = useUser();

  return (
    <div className=" flex items-center justify-center h-full">
      <div className="w-72">
        <div className="w-3/4 mx-auto mb-6">
          <img
            src={`https://avatars.dicebear.com/api/${gender}/${seed}.svg`}
            alt="avatar"
          />
          <div className="w-full flex justify-around mt-2">
            <div
              className="cursor-pointer p-1"
              title="male"
              onClick={() => setGender("male")}
            >
              <i
                className={`fa-solid fa-person text-2xl ${
                  gender === "male" ? "text-cta" : ""
                }`}
              ></i>
            </div>
            <div
              className="cursor-pointer p-1"
              title="female"
              onClick={() => setGender("female")}
            >
              <i
                className={`fa-solid fa-person-dress text-2xl ${
                  gender === "female" ? "text-cta" : ""
                }`}
              ></i>
            </div>
            <div
              className="cursor-pointer p-1"
              title="reload"
              onClick={() => setSeed(Math.random())}
            >
              <i className="fa-solid fa-arrows-rotate text-2xl "></i>
            </div>
          </div>
        </div>
        <div>
          <input
            onChange={e => setName(e.target.value.trimStart())}
            value={name}
            placeholder="Enter Your Name"
            className="outline-none w-full bg-transparent h-10 border-b-2 border-neutral-700"
            type="text"
          />
        </div>
        <button
          onClick={() => createUser(name.trim(), seed)}
          className="mt-5 bg-cta text-primary md:text-lg w-full py-2 rounded-sm disabled:opacity-50"
          disabled={status === "loading"}
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
};

export default SignUp;

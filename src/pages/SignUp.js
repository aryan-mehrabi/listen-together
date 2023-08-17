import React, { useState } from "react";
import useUser from "context/UserContext";
import Button from "components/Button";
import Input from "components/Input";

const SignUp = () => {
  const [name, setName] = useState("");
  const [seed, setSeed] = useState(Math.random());
  const [gender, setGender] = useState("human");
  const { createUser, status } = useUser();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const trimedName = name.trim();
    if (trimedName) {
      createUser(trimedName, seed);
    }
  }

  return (
    <div className=" flex items-center justify-center h-full">
      <form onSubmit={onFormSubmit} className="w-72">
        <div className="w-3/4 mx-auto mb-6">
          <img
            src={`https://avatars.dicebear.com/api/${gender}/${seed}.svg`}
            alt="avatar"
          />
          <div className="w-full flex justify-around mt-3">
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
          <Input
            setValue={val => setName(val.trimStart())}
            value={name}
            placeholder="Enter Your Name"
            className={`h-10 border-b-2 ${name ? "border-cta" : ""}`}
            type="text"
          />
        </div>
        <Button
          type="cta"
          className="mt-5 md:text-lg w-full font-semibold"
          disabled={status === "loading" || !name}
        >
          Start Chatting
        </Button>
      </form>
    </div>
  );
};

export default SignUp;

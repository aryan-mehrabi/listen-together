import React, { useState } from "react";
import useChannel from "../context/ChannelContext";

const ChannelAddMember = () => {
  const [email, setEmail] = useState("");
  const { addMember } = useChannel();

  const onSubmitForm = event => {
    event.preventDefault();
    addMember(email);
    setEmail("")
  };

  return (
    <div className="my-11">
      <h2 className="text-2xl font-semibold">Add a Member</h2>
      <form className="mt-3.5" onSubmit={onSubmitForm}>
        <label htmlFor="">User Email Adress:</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value.toLowerCase())}
          className="w-full bg-neutral-700 rounded-sm p-1.5 my-2"
          type="email"
          placeholder="E.g. example@example.com"
        />
        <button className="w-full bg-cta text-primary my-1 px-2 py-1.5 rounded-sm">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default ChannelAddMember;

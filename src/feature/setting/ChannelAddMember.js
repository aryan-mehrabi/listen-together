import React, { useState, useEffect } from "react";
import useChannel from "context/ChannelContext";

const ChannelAddMember = () => {
  const [email, setEmail] = useState("");
  const { addMember, status } = useChannel();

  const onSubmitForm = event => {
    event.preventDefault();
    addMember(email);
  };

  useEffect(() => {
    if (status === "idle") {
      setEmail("");
    }
  }, [status]);

  return (
    <div className="my-11">
      <h2 className="text-2xl font-semibold">Add a Member</h2>
      <form className="mt-3.5" onSubmit={onSubmitForm}>
        <label htmlFor="">User Email:</label>
        <input
          value={email}
          onChange={e => setEmail(e.target.value.toLowerCase())}
          className="w-full bg-neutral-700 rounded-sm p-1.5 my-2"
          type="email"
          placeholder="example@example.com"
        />
        <button
          disabled={status === "loading"}
          className="w-full bg-cta text-primary my-1 px-2 py-1.5 rounded-sm disabled:opacity-50"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default ChannelAddMember;

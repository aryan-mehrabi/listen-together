import React, { useState } from "react";
import useChannel from "context/ChannelContext";
import Button from "components/Button";
import Input from "components/Input";
import useMember from "context/MemberContext";
import { overrideTailwindClasses } from "tailwind-override";

const ChannelAddMember = ({ className = "" }) => {
  const [username, setUsername] = useState("");
  const { status } = useChannel();
  const { addMember } = useMember();

  const onSubmitForm = async (event) => {
    event.preventDefault();
    await addMember(username);
    setUsername("");
  };

  return (
    <div className={overrideTailwindClasses(`my-11 ${className}`)}>
      <h2 className="text-2xl font-semibold">Add a Member</h2>
      <form className="mt-3.5" onSubmit={onSubmitForm}>
        <label htmlFor="">Username</label>
        <Input
          value={username}
          setValue={(val) => setUsername(val.toLowerCase())}
          className="my-1"
          type="text"
          placeholder="name-0000"
        />
        <Button
          type="cta"
          disabled={status === "loading"}
          className="w-full my-3.5"
        >
          Add Member
        </Button>
      </form>
    </div>
  );
};

export default ChannelAddMember;

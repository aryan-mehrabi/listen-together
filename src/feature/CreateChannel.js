import React, { useState } from "react";
import useChannel from "context/ChannelContext";
import Button from "components/Button";
import Input from "components/Input";

const CreateChannel = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, status } = useChannel();

  const onFormSubmit = (e) => {
    e.preventDefault();
    createChannel(channelName.trim());
  };

  return (
    <div className="bg-primary text-secondary w-[350px] rounded flex flex-col p-8">
      <h2 className="text-center text-xl mb-10 font-semibold">
        Create a Channel
      </h2>
      <form onSubmit={onFormSubmit} className="flex flex-col gap-7 flex-grow">
        <div>
          <label>Channel Name:</label>
          <Input
            autoFocus
            setValue={(val) => setChannelName(val.trimStart())}
            value={channelName}
            type="text"
            placeholder="Type Channel Name"
            className="mt-1"
          />
        </div>
        <Button type="cta" disabled={!channelName || status === "loading"}>
          Create Channel
        </Button>
      </form>
    </div>
  );
};

export default CreateChannel;

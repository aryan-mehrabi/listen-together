import React, { useState } from "react";
import useChannel from "../context/ChannelContext";

const CreateChannel = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, status } = useChannel();

  return (
    <div className="bg-primary text-secondary w-[350px] rounded flex flex-col p-8">
      <h2 className="text-center text-xl mb-10 font-semibold">
        Create a Channel
      </h2>
      <div className="flex flex-col gap-7 flex-grow">
        <div>
          <label>Channel Name:</label>
          <input
            onChange={e => setChannelName(e.target.value.trimStart())}
            value={channelName}
            type="text"
            placeholder="Type Channel Name"
            className="bg-neutral-700 rounded-sm w-full p-2 mt-1"
          />
        </div>
        <button
          disabled={!channelName || status === "loading"}
          onClick={() => createChannel(channelName.trim())}
          className="bg-cta text-primary w-full rounded-sm p-2 disabled:opacity-50"
        >
          Create Channel
        </button>
      </div>
    </div>
  );
};

export default CreateChannel;

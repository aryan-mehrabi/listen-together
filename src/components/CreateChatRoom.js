import React, { useState } from "react";

const CreateChatRoom = () => {
  const [channelName, setChannelName] = useState("");

  return (
    <div className="bg-primary text-secondary w-[350px] rounded flex flex-col p-8">
      <div className="text-center text-xl mb-10 font-semibold">
        Create a Channel
      </div>
      <div className="flex flex-col gap-7 flex-grow">
        <div>
          <label>Channel Name:</label>
          <input
            onChange={(e) => setChannelName(e.target.value)}
            value={channelName}
            type="text"
            placeholder="Type Channel Name"
            className="bg-neutral-700 rounded-sm w-full p-2 mt-1"
          />
        </div>
        <button className="bg-cta text-primary w-full rounded-sm p-2">
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateChatRoom;

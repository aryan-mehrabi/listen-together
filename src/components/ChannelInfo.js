import React from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";

const ChannelInfo = () => {
  const { userId } = useAuth();
  const { channels, selectedChannel, removeMember } = useChannel();
  const channel = channels[selectedChannel];

  const deleteButton = (
    <button className="bg-neutral-800 rounded-sm p-2 w-full text-red-500">
      Delete Channel
    </button>
  );
  const leaveButton = (
    <button
      onClick={() => removeMember(userId)}
      className="bg-neutral-800 rounded-sm p-2 w-full text-red-500"
    >
      Leave Channel
    </button>
  );

  return (
    <div className="mt-2">
      <h2 className="text-2xl font-semibold">Info</h2>
      <div className="mt-3.5">
        <p className="text-xl my-3">chatroom 1</p>
        {channel.roles[userId] === "creator" ? deleteButton : leaveButton}
      </div>
    </div>
  );
};

export default ChannelInfo;

import React from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";

const ChannelInfo = ({ setRightSideBar }) => {
  const { userId } = useAuth();
  const { channels, selectedChannel, leaveChannel } = useChannel();
  const channel = channels[selectedChannel];

  const deleteButton = (
    <button className="bg-neutral-800 rounded-sm p-2 w-full text-red-500">
      Delete Channel
    </button>
  );
  const leaveButton = (
    <button
      onClick={() => leaveChannel(userId)}
      className="bg-neutral-800 rounded-sm p-2 w-full text-red-500"
    >
      Leave Channel
    </button>
  );

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Info</h2>
        <i
          onClick={() => setRightSideBar("")}
          className="fa-solid fa-xmark text-3xl cursor-pointer"
        ></i>
      </div>
      <div className="mt-3.5">
        <p className="text-xl my-3">{channel.name}</p>
        {channel.roles[userId] === "creator" ? deleteButton : leaveButton}
      </div>
    </div>
  );
};

export default ChannelInfo;

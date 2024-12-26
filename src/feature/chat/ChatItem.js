import React from "react";
import useChannel from "context/ChannelContext";
import { BiHeadphone } from "react-icons/bi";

const ChatItem = ({ channel }) => {
  const { setSelectedChannel, selectedChannel } = useChannel();

  return (
    <div
      className={`flex items-center border-b border-neutral-700 py-5 px-4 
              hover:bg-neutral-700 cursor-pointer ${
                selectedChannel === channel.id ? "bg-neutral-700" : ""
              }`}
      onClick={() => setSelectedChannel(channel.id)}
    >
      <BiHeadphone className="text-2xl" />
      <p className="ml-3 sm:text-lg text-ellipsis overflow-hidden whitespace-nowrap">
        {channel.name}
      </p>
    </div>
  );
};

export default ChatItem;

import React from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import ChannelAddMember from "./ChannelAddMember";
import ChannelInfo from "./ChannelInfo";
import ChannelMembers from "./ChannelMembers";

const ChannelSettings = () => {
  const { selectedChannel, channels } = useChannel();
  const { userId } = useAuth();
  const role = channels[selectedChannel].roles[userId];

  return (
    <div className="w-full md:border-l md:border-neutral-700 md:w-[37%] md:min-w-[150px] md:max-w-sm px-5 py-3 overflow-auto">
      <ChannelInfo />
      {(role === "creator" || role === "admin") && <ChannelAddMember />}
      <ChannelMembers />
    </div>
  );
};

export default ChannelSettings;

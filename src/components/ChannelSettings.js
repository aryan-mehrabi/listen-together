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
    <div className="border-l border-neutral-700 w-[37%] min-w-[150px] max-w-sm px-5 py-3 overflow-auto">
      <ChannelInfo />
      {(role === "creator" || role === "admin") && <ChannelAddMember />}
      <ChannelMembers />
    </div>
  );
};

export default ChannelSettings;

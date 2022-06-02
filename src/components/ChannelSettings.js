import React from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import ChannelAddMember from "./ChannelAddMember";
import ChannelInfo from "./ChannelInfo";
import ChannelMembers from "./ChannelMembers";

const ChannelSettings = ({ setIsSettingOpen }) => {
  const { selectedChannel, channels } = useChannel();
  const { userId } = useAuth();
  const role = channels[selectedChannel].roles[userId];

  return (
    <div className="w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[150px] sm:max-w-sm px-5 py-3 overflow-auto">
      <ChannelInfo {...{ setIsSettingOpen }} />
      {(role === "creator" || role === "admin") && <ChannelAddMember />}
      <ChannelMembers />
    </div>
  );
};

export default ChannelSettings;

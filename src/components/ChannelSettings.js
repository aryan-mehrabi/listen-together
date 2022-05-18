import React from "react";
import ChannelAddMember from "./ChannelAddMember";
import ChannelInfo from "./ChannelInfo";
import ChannelMembers from "./ChannelMembers";

const ChannelSettings = () => {
  return (
    <div className="border-l border-neutral-700 w-[37%] min-w-[200px] max-w-sm px-5 py-3 overflow-auto">
      <ChannelInfo />
      <ChannelAddMember />
      <ChannelMembers />
    </div>
  );
};

export default ChannelSettings;

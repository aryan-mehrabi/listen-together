import React from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import ChannelAddMember from "./ChannelAddMember";
import ChannelInfo from "./ChannelInfo";
import ChannelMembers from "./ChannelMembers";
import useMember from "context/MemberContext";
import ChannelInviteLink from "./ChannelInviteLink";

const ChannelSettings = () => {
  const { selectedChannel } = useChannel();
  const { userId } = useAuth();
  const { members } = useMember();
  const { role } =
    Object.values(members).find(
      (member) =>
        member.user_id === userId && member.channel_id === selectedChannel
    ) || {};

  return (
    <div className="w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[200px] sm:max-w-sm px-5 py-3 overflow-auto">
      <ChannelInfo {...{ role }} />
      {(role === "creator" || role === "admin") && (
        <>
          <ChannelInviteLink className="my-11" />
          <ChannelAddMember />
        </>
      )}
      <ChannelMembers />
    </div>
  );
};

export default ChannelSettings;

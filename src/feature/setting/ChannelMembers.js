import React, { useEffect } from "react";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";
import MemberSettings from "./MemberSettings";
import useMember from "context/MemberContext";

const ChannelMembers = () => {
  const { selectedChannel } = useChannel();
  const { listenChannelMembers, users } = useUser();
  const { members, fetchChannelsMember } = useMember();

  useEffect(() => {
    fetchChannelsMember(selectedChannel);
    listenChannelMembers(selectedChannel);
  }, [selectedChannel]);

  const renderMembers = () => {
    return Object.values(members)
      .filter(member => {
        return member.channel_id === selectedChannel;
      })
      .map(({ user_id }) => (
        <div key={user_id} className="flex items-center my-2.5">
          <img
            src={users[user_id]?.avatar}
            alt="avatar"
            className="w-11 sm:w-12"
          />
          <p className="text-lg ml-2">{users[user_id]?.name}</p>
          <MemberSettings userId={user_id} />
        </div>
      ));
  };

  return (
    <div className="my-11">
      <h2 className="text-2xl font-semibold">Members</h2>
      <div className="mt-3.5">{renderMembers()}</div>
    </div>
  );
};

export default ChannelMembers;

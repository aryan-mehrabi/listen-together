import React from "react";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";
import MemberSettings from "./MemberSettings";
import useMember from "context/MemberContext";

const ChannelMembers = () => {
  const { selectedChannel } = useChannel();
  const { users } = useUser();
  const { members } = useMember();

  const renderMembers = () => {
    return Object.values(members)
      .filter((member) => {
        return member.channel_id === selectedChannel;
      })
      .map(({ user_id, role }) => (
        <div key={user_id} className="flex items-center my-2.5">
          <img
            src={users[user_id]?.avatar}
            alt="avatar"
            className="w-11 sm:w-12"
          />
          <p className="text-lg ml-2">
            {users[user_id]?.name}{" "}
            <span className="text-xs text-neutral-500">({role})</span>
          </p>
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

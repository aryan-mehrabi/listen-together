import React, { useEffect } from "react";
import useChannel from "../context/ChannelContext";
import useUser from "../context/UserContext";
import MembersSetting from "./MembersSetting";

const ChannelMembers = () => {
  const { selectedChannel, channels } = useChannel();
  const { listenChannelMembers, users } = useUser();
  const channelRoles = Object.keys(channels[selectedChannel].roles);

  useEffect(() => {
    listenChannelMembers(selectedChannel);
  }, [selectedChannel]);

  const renderMembers = () => {
    return Object.values(users)
      .filter(member => {
        return channelRoles.includes(member.userId)
      })
      .map(({ userId, name, avatar }) => (
        <div key={userId} className="flex items-center my-2.5">
          <img src={avatar} alt="avatar" className="w-12" />
          <p className="text-lg ml-2">{name}</p>
          <MembersSetting {...{ userId }} />
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

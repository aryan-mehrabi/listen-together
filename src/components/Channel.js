import React, { useEffect, useState } from "react";
import useChannel from "../context/ChannelContext";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import ChannelNav from "./ChannelNav";
import ChannelSettings from "./ChannelSettings";

const Channel = () => {
  const { selectedChannel, listenChannel, channels } = useChannel();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  useEffect(() => {
    if (selectedChannel) {
      listenChannel(selectedChannel);
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return <div>loadin</div>;
  }

  return (
    <section className="h-full flex">
      <div className="flex flex-col flex-grow">
        <ChannelNav {...{ isSettingOpen, setIsSettingOpen }} />
        <ChannelConversation />
        <ChannelMessageInput />
      </div>
      {isSettingOpen && <ChannelSettings />}
    </section>
  );
};

export default Channel;

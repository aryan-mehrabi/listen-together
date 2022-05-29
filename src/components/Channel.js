import React, { useEffect, useState } from "react";
import useChannel from "../context/ChannelContext";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import ChannelNav from "./ChannelNav";
import ChannelSettings from "./ChannelSettings";
import Spinner from "./Spinner";

const Channel = () => {
  const { selectedChannel, listenChannel, channels } = useChannel();
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  useEffect(() => {
    if (selectedChannel) {
      listenChannel(selectedChannel);
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return <div className="flex items-center justify-center h-full"><Spinner /></div>;
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

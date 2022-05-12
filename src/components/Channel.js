import React, { useEffect } from "react";
import useChannel from "../context/ChannelContext";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import ChannelNav from "./ChannelNav";

const Channel = () => {
  const { selectedChannel, listenChannel, channels } = useChannel();

  useEffect(() => {
    if (selectedChannel) {
      return listenChannel(selectedChannel);
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return <div>loadin</div>;
  }

  return (
    <section className="h-full flex flex-col">
      <ChannelNav />
      <ChannelConversation />
      <ChannelMessageInput />
    </section>
  );
};

export default Channel;

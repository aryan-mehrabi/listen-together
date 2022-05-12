import React from "react";
import useChannel from "../context/ChannelContext";
import ChannelMessage from "./ChannelMessage";

const ChannelConversation = () => {
  const { channels, selectedChannel } = useChannel();

  const renderMessages = () => {
    const channel = channels[selectedChannel];
    if (!channel.messages) return;
    const messages = Object.values(channel.messages);
    return messages
      .sort((a, b) => a.createdAt - b.createdAt)
      .map(message => <ChannelMessage key={message.id} {...{ message }} />);
  };

  return (
    <section className="overflow-auto flex flex-col items-start flex-grow p-6">
      {renderMessages()}
    </section>
  );
};

export default ChannelConversation;

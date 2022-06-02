import React, { useRef, useEffect } from "react";
import useChannel from "../context/ChannelContext";
import ChannelMessage from "./ChannelMessage";

const ChannelConversation = () => {
  const { channels, selectedChannel } = useChannel();
  const scrollBottom = useRef(null);

  useEffect(() => {
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  }, [channels[selectedChannel].messages]);

  const renderMessages = () => {
    const channel = channels[selectedChannel];
    if (channel.messages) {
      const messages = Object.values(channel.messages);
      return messages.map(message => (
        <ChannelMessage key={message.id} {...{ message }} />
      ));
    }
  };

  return (
    <section className="overflow-auto flex flex-col items-start flex-grow p-6">
      {renderMessages()}
      <div ref={scrollBottom}></div>
    </section>
  );
};

export default ChannelConversation;

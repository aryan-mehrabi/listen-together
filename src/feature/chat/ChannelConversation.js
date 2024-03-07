import React, { useRef, useEffect } from "react";
import useChannel from "context/ChannelContext";
import ChannelMessage from "./ChannelMessage";
import useMessage from "context/MessageContext";

const ChannelConversation = () => {
  const { selectedChannel } = useChannel();
  const scrollBottom = useRef(null);
  const { messages } = useMessage();
  const channelMessages = Object.values(messages[selectedChannel] || {});

  useEffect(() => {
    setTimeout(() => {
      scrollBottom.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }, [messages]);

  const renderMessages = () => {
    if (channelMessages) {
      return channelMessages.map((message) => (
        <ChannelMessage key={message.id} {...{ message }} />
      ));
    }
  };

  return (
    <section className="overflow-y-auto overflow-x-hidden flex flex-col items-start flex-grow p-6">
      {renderMessages()}
      <div ref={scrollBottom}></div>
    </section>
  );
};

export default ChannelConversation;

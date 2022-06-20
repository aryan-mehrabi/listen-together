import React, { useRef, useEffect } from "react";
import useChannel from "../context/ChannelContext";
import ChannelMessage from "./ChannelMessage";

const ChannelConversation = () => {
  const { channels, selectedChannel } = useChannel();
  const scrollBottom = useRef(null);
  const {messages, roles} = channels[selectedChannel];

  useEffect(() => {
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const renderMessages = () => {
    if (messages) {
      const messagesArr = Object.values(messages);
      return messagesArr.map(message => (
        <ChannelMessage key={message.id} {...{ message, roles }} />
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

import React from "react";
import ChannelNav from "./ChannelNav";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";

const Chat = () => {
  return (
    <div className="flex flex-col flex-grow">
      <ChannelNav />
      <ChannelConversation />
      <ChannelMessageInput />
    </div>
  );
};

export default Chat;

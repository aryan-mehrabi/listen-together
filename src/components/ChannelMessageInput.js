import React, { useState } from "react";
import useChannel from "../context/ChannelContext";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useChannel();

  const onSubmitForm = e => {
    e.preventDefault();
    sendMessage(message.trim());
    setMessage("");
  };

  return (
    <form
      onSubmit={onSubmitForm}
      className="flex p-3 border-t border-neutral-700"
    >
      <input
        onChange={e => setMessage(e.target.value.trimStart())}
        value={message}
        placeholder="Type a message"
        className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2"
        type="text"
      />
      <button
        disabled={!message}
        className="bg-cta text-primary disabled:opacity-50 rounded-sm ml-2 px-4"
      >
        SEND
      </button>
    </form>
  );
};

export default ChannelMessageInput;

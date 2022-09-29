import React, { useState, useRef } from "react";
import useChannel from "context/ChannelContext";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const { sendMessage } = useChannel();

  const onSubmitForm = e => {
    e.preventDefault();
    const trimedMessage = message.trim();
    if (trimedMessage) {
      sendMessage(trimedMessage);
      setMessage("");
    }
  };

  const onEnterPress = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmitForm}
      className="flex p-3 border-t border-neutral-700"
    >
      <textarea
        onKeyDown={onEnterPress}
        onChange={e => setMessage(e.target.value.trimStart())}
        value={message}
        placeholder="Type a message"
        className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2 resize-none"
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

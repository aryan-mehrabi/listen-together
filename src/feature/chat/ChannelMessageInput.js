import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const { sendMessage } = useMessage();

  const onSubmitForm = e => {
    e.preventDefault();
    const trimedMessage = message.trim();
    if (trimedMessage) {
      sendMessage({ body: trimedMessage });
      setMessage("");
    }
  };

  const onKeyPressEnter = e => {
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
        onKeyDown={onKeyPressEnter}
        onChange={e => setMessage(e.target.value.trimStart())}
        value={message}
        placeholder="Type a message"
        className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2 resize-none"
        type="text"
      />
      <Button type="cta" disabled={!message} className="ml-2">
        SEND
      </Button>
    </form>
  );
};

export default ChannelMessageInput;

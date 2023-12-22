import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const { sendMessage, messages, reply, setReply } = useMessage();
  const { selectedChannel } = useChannel();
  const { users } = useUser();

  const renderReply = () => {
    if (!reply) return null;
    const replyMessage = messages[selectedChannel][reply];
    const replyUser = users[replyMessage.user_id];
    return (
      <div className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900">
        <div className="text-cta">
          <i className="fa fa-reply" aria-hidden="true"></i>
        </div>
        {replyMessage.content.thumbnail && (
          <div className="w-16">
            <img
              className="w-full h-full"
              src={replyMessage.content.thumbnail}
              alt=""
            />
          </div>
        )}
        <div>
          <p className="text-cta">Reply to {replyUser.name}</p>
          <p className="text-neutral-400">
            {replyMessage.content.body || replyMessage.content.title}
          </p>
        </div>
        <div className="ml-auto cursor-pointer" onClick={() => setReply(null)}>
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </div>
      </div>
    );
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const trimedMessage = message.trim();
    if (trimedMessage) {
      sendMessage({ body: trimedMessage });
      setMessage("");
      setReply(null);
    }
  };

  const onKeyPressEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  };

  return (
    <div>
      {renderReply()}
      <form
        ref={formRef}
        onSubmit={onSubmitForm}
        className="flex p-3 border-t border-neutral-700"
      >
        <textarea
          onKeyDown={onKeyPressEnter}
          onChange={(e) => setMessage(e.target.value.trimStart())}
          value={message}
          placeholder="Type a message"
          className="flex-grow bg-neutral-700 h-10 rounded outline-none p-2 resize-none"
          type="text"
        />
        <Button type="cta" disabled={!message} className="ml-2">
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChannelMessageInput;

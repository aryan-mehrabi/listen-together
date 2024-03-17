import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";
import { filterImageFiles } from "helpers";
import ChannelMessageInputReply from "./ChannelMessageInputReply";
import ChannelMessageInputAttachments from "./ChannelMessageInputAttachments";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const { sendMessage, setReply, setAttachments, attachments } = useMessage();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const trimedMessage = message.trim();
    if (trimedMessage || attachments.length) {
      sendMessage(
        { body: trimedMessage },
        attachments.length ? "image" : "text",
        attachments
      );
      setMessage("");
      setReply(null);
      setAttachments([]);
    }
  };

  const onKeyPressEnter = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      formRef.current.requestSubmit();
    }
  };

  const onChangeFileInput = (e) => {
    const files = Array.from(e.target.files).filter(filterImageFiles);
    setAttachments(files);
  };

  const onPasteMessageInput = (e) => {
    const files = Array.from(e.clipboardData.files).filter(filterImageFiles);
    setAttachments(files);
  };

  return (
    <div>
      <ChannelMessageInputReply />
      <ChannelMessageInputAttachments />
      <form
        ref={formRef}
        onSubmit={onSubmitForm}
        className="flex p-3 border-t border-neutral-700"
      >
        <div className="relative flex-grow h-10">
          <input
            onChange={onChangeFileInput}
            accept="image/jpeg, image/jpg, image/png, image/gif"
            multiple
            type="file"
            className="hidden"
            ref={fileInputRef}
          />
          <textarea
            onPaste={onPasteMessageInput}
            onKeyDown={onKeyPressEnter}
            onChange={(e) => setMessage(e.target.value.trimStart())}
            value={message}
            placeholder="Type a message"
            className="w-full bg-neutral-700 h-full rounded outline-none p-2 resize-none"
            type="text"
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl"
            onClick={() => fileInputRef.current.click()}
          >
            <i className="fa fa-file-image" aria-hidden="true"></i>
          </button>
        </div>
        <Button
          type="cta"
          disabled={!message && !attachments.length}
          className="ml-2"
        >
          SEND
        </Button>
      </form>
    </div>
  );
};

export default ChannelMessageInput;

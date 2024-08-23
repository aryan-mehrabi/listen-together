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
        <div className="flex-grow h-10">
          <input
            onChange={onChangeFileInput}
            accept="image/jpeg, image/jpg, image/png, image/gif"
            multiple
            type="file"
            className="hidden"
            ref={fileInputRef}
          />
          <div className="flex items-center gap-2 w-full h-full bg-neutral-700 rounded p-2 pr-3">
            <textarea
              onPaste={onPasteMessageInput}
              onKeyDown={onKeyPressEnter}
              onChange={(e) => setMessage(e.target.value.trimStart())}
              value={message}
              placeholder="Message"
              className="bg-transparent w-full h-full outline-none resize-none"
              type="text"
            />
            <button
              type="button"
              className="text-lg"
              onClick={() => fileInputRef.current.click()}
            >
              <i className="fa fa-paperclip" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <Button
          type="cta"
          disabled={!message && !attachments.length}
          className="ml-2"
        >
          <i className="fa-solid fa-paper-plane" />
        </Button>
      </form>
    </div>
  );
};

export default ChannelMessageInput;

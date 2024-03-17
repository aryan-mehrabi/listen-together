import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";
import { filterImageFiles } from "helpers";
import ChannelMessageImageReply from "./ChannelMessageImageReply";
import ImageBlob from "components/ImageBlob";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const {
    sendMessage,
    messages,
    reply,
    setReply,
    setAttachments,
    attachments,
  } = useMessage();
  const { selectedChannel } = useChannel();
  const { users } = useUser();

  const renderAttachments = () => {
    if (!attachments.length) return null;
    return attachments.map((attachment) => (
      <div
        key={attachment.name}
        className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900"
      >
        <div className="w-16">
          <img
            className="w-full h-full"
            src={URL.createObjectURL(attachment)}
            alt=""
          />
        </div>
        <div>
          <p className="text-cta">{attachment.name}</p>
          <p className="text-neutral-400">
            size: {Math.floor(attachment.size / 1000)}kb
          </p>
        </div>
        <div
          className="ml-auto cursor-pointer"
          onClick={() =>
            setAttachments(
              attachments.filter((file) => file.name !== attachment.name)
            )
          }
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </div>
      </div>
    ));
  };

  const renderReply = () => {
    if (!reply) return null;
    const replyMessage = messages[selectedChannel][reply];
    const replyUser = users[replyMessage.user_id];
    return (
      <div className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900">
        <div className="text-cta">
          <i className="fa fa-reply" aria-hidden="true"></i>
        </div>
        {replyMessage.message_type === "track" && (
          <div className="w-16">
            <img
              className="w-full h-full"
              src={replyMessage.content.thumbnail}
              alt=""
            />
          </div>
        )}
        {replyMessage.message_type === "image" && (
          <div className="w-16 h-16">
            {replyMessage.attachments[0].url ? (
              <ChannelMessageImageReply image={replyMessage.attachments[0]} />
            ) : (
              <ImageBlob blob={replyMessage.attachments[0]} />
            )}
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
      {renderReply()}
      {renderAttachments()}
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

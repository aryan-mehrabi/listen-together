import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";
import { filterImageFiles, isMobileDevice } from "helpers";
import ChannelMessageInputReply from "./ChannelMessageInputReply";
import ChannelMessageInputAttachments from "./ChannelMessageInputAttachments";
import ChannelMessageInputVideo from "./ChannelMessageInputVideo";
import { getVideos } from "apis/youtube";
import { useDebouncedCallback } from "use-debounce";
import { BiPaperclip, BiSolidPaperPlane } from "react-icons/bi";

const ChannelMessageInput = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const fileInputRef = useRef(null);
  const {
    sendMessage,
    setReply,
    setAttachments,
    attachments,
    track,
    setTrack,
    messageInputRef,
  } = useMessage();

  const onSubmitForm = (e) => {
    e.preventDefault();
    messageInputRef.current.focus();
    const trimedMessage = message.trim();

    if (trimedMessage || attachments.length || track) {
      sendMessage(
        track || { body: trimedMessage },
        track ? "track" : attachments.length ? "image" : "text",
        attachments
      );
      setMessage("");
      setReply(null);
      setAttachments([]);
      setTrack(null);
    }
  };

  const onKeyPressEnter = (e) => {
    if (
      e.keyCode === 13 &&
      !e.shiftKey &&
      !isMobileDevice(navigator.userAgent)
    ) {
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

  const handleChangeMessageInput = (e) => {
    const message = e.target.value.trimStart();
    setMessage(message);

    handleVideoUrl(message);
  };

  const handleVideoUrl = useDebouncedCallback(async (msg) => {
    const regex =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;

    const array = [...msg.matchAll(regex)];

    if (array[0] && array[0][1]) {
      const videoId = array[0][1];
      const res = await getVideos(videoId);

      if (res.items.length) {
        setTrack({
          title: res.items[0].snippet.title,
          track_id: videoId,
        });
      } else {
        setTrack(null);
      }
    } else {
      setTrack(null);
    }
  }, 500);

  return (
    <div>
      <ChannelMessageInputReply />
      {track ? (
        <ChannelMessageInputVideo track={track} />
      ) : (
        <ChannelMessageInputAttachments />
      )}
      <form
        ref={formRef}
        onSubmit={onSubmitForm}
        className="flex items-end p-3 border-t border-neutral-700"
      >
        <div className="flex-grow">
          <input
            onChange={onChangeFileInput}
            accept="image/jpeg, image/jpg, image/png, image/gif"
            multiple
            type="file"
            className="hidden"
            ref={fileInputRef}
          />
          <div className="flex items-end gap-2 w-full bg-neutral-700 rounded p-1.5 pr-3">
            <div className="grid w-full">
              <textarea
                ref={messageInputRef}
                onPaste={onPasteMessageInput}
                onKeyDown={onKeyPressEnter}
                onChange={handleChangeMessageInput}
                value={message}
                placeholder="Message"
                className="resize-none min-h-[26px] max-h-[100px] overflow-y-auto bg-transparent outline-none col-start-1 row-start-1"
                rows="1"
              />
              <div
                className="invisible max-h-[100px] whitespace-pre-wrap break-words col-start-1 row-start-1 pointer-events-none"
                aria-hidden="true"
              >
                {message + "\n"}
              </div>
            </div>
            <button
              type="button"
              className="text-lg self-stretch -rotate-45"
              onClick={() => fileInputRef.current.click()}
            >
              <BiPaperclip />
            </button>
          </div>
        </div>
        <Button
          type="cta"
          disabled={!(message || attachments.length || track)}
          className="ml-2 text-xl self-stretch"
        >
          <BiSolidPaperPlane />
        </Button>
      </form>
    </div>
  );
};

export default ChannelMessageInput;

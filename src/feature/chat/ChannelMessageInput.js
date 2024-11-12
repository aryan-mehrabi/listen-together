import React, { useState, useRef } from "react";
import Button from "components/Button";
import useMessage from "context/MessageContext";
import { filterImageFiles } from "helpers";
import ChannelMessageInputReply from "./ChannelMessageInputReply";
import ChannelMessageInputAttachments from "./ChannelMessageInputAttachments";
import ChannelMessageInputVideo from "./ChannelMessageInputVideo";
import { getVideos } from "apis/youtube";
import { useDebouncedCallback } from "use-debounce";

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
          thumbnail: res.items[0].snippet.thumbnails.default.url,
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
              ref={messageInputRef}
              onPaste={onPasteMessageInput}
              onKeyDown={onKeyPressEnter}
              onChange={handleChangeMessageInput}
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
          disabled={!(message || attachments.length || track)}
          className="ml-2"
        >
          <i className="fa-solid fa-paper-plane" />
        </Button>
      </form>
    </div>
  );
};

export default ChannelMessageInput;

import React from "react";
import useChannel from "../context/ChannelContext";
import { decode } from "he";
import useAuth from "../context/AuthContext";

const MusicItem = ({ track }) => {
  const { updateTrack, selectedChannel, channels, sendMessage } = useChannel();
  const { userId } = useAuth();
  const { roles } = channels[selectedChannel];

  const onClickItem = () => {
    if (roles[userId] === "member") {
      sendMessage({
        title: track.snippet.title,
        thumbnail: track.snippet.thumbnails.default.url,
        trackId: track.id.videoId,
      });
    } else {
      updateTrack(track.id.videoId);
    }
  };
  return (
    <div
      onClick={onClickItem}
      className="flex items-center border-b border-neutral-700 p-4 cursor-pointer hover:bg-neutral-700"
    >
      <img src={track.snippet.thumbnails.default.url} className="w-20 mr-4" />
      <p className="my-1 text-sm">{decode(track.snippet.title)}</p>
    </div>
  );
};

export default MusicItem;

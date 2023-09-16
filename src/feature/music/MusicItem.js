import React from "react";
import useChannel from "context/ChannelContext";
import { decode } from "he";
import useAuth from "context/AuthContext";
import useMember from "context/MemberContext";
import useMessage from "context/MessageContext";

const MusicItem = ({ track }) => {
  const { updateTrack, selectedChannel } = useChannel();
  const { userId } = useAuth();
  const { members } = useMember();
  const { sendMessage } = useMessage();
  const { role } =
    Object.values(members).find(
      member =>
        member.user_id === userId && member.channel_id === selectedChannel
    ) || {};

  const onClickItem = () => {
    if (role === "member") {
      sendMessage({
        title: track.snippet.title,
        thumbnail: track.snippet.thumbnails.default.url,
        track_id: track.id.videoId,
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
      <img
        src={track.snippet.thumbnails.default.url}
        className="w-20 mr-4"
        alt="track thumbnail"
      />
      <p className="my-1 text-sm">{decode(track.snippet.title)}</p>
    </div>
  );
};

export default MusicItem;

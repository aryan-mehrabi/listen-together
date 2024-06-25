import React from "react";
import useChannel from "context/ChannelContext";
import { decode } from "he";
import useAuth from "context/AuthContext";
import useMember from "context/MemberContext";
import useMessage from "context/MessageContext";
import useMediaQuery from "hooks/useMediaQuery";
import useRightSidebar from "context/RightSidebarContext";

const MusicItem = ({ track }) => {
  const isMobile = useMediaQuery();
  const { updateTrack, selectedChannel } = useChannel();
  const { userId } = useAuth();
  const { members } = useMember();
  const { sendMessage, setReply } = useMessage();
  const { role } =
    Object.values(members).find(
      (member) =>
        member.user_id === userId && member.channel_id === selectedChannel
    ) || {};
  const { setRightSidebar } = useRightSidebar();

  const onClickItem = () => {
    if (role === "member") {
      sendMessage(
        {
          title: track.snippet.title,
          thumbnail: track.snippet.thumbnails.default.url,
          track_id: track.id.videoId,
        },
        "track"
      );
      if (isMobile) {
        setRightSidebar("");
      }
      setReply(null);
    } else {
      updateTrack(track.id.videoId);
    }
  };

  return (
    <li
      onClick={onClickItem}
      className="flex items-center border-b border-neutral-700 p-4 cursor-pointer hover:bg-neutral-700"
    >
      <img
        src={track.snippet.thumbnails.default.url}
        className="min-w-[5rem] w-20 mr-4"
        alt="track thumbnail"
        loading="lazy"
      />
      <p className="my-1 text-sm">{decode(track.snippet.title)}</p>
    </li>
  );
};

export default MusicItem;

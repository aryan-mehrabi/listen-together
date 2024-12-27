import React from "react";
import useChannel from "context/ChannelContext";
import { decode } from "he";
import useAuth from "context/AuthContext";
import useMember from "context/MemberContext";
import useMessage from "context/MessageContext";
import useMediaQuery from "hooks/useMediaQuery";
import useRightSidebar from "context/RightSidebarContext";
import { BiPaperPlane, BiPlay, BiSolidAddToQueue } from "react-icons/bi";

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

  const handlePlayMusic = () => {
    updateTrack(track.id.videoId, {
      title: track.snippet.title,
      thumbnail: track.snippet.thumbnails.default.url,
    });
    setRightSidebar("player");
  };

  const handleRequestMusic = () => {
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
  };

  const handleQueueMusic = () => {};

  return (
    <li className="flex items-center border-b border-neutral-700 p-4 cursor-pointer">
      <img
        src={track.snippet.thumbnails.default.url}
        className="min-w-[5rem] w-20 h-full mr-4 aspect-auto"
        alt="track thumbnail"
        loading="lazy"
      />
      <p className="my-1 text-sm">{decode(track.snippet.title)}</p>
      <div className="ml-auto pl-1 flex items-center text-2xl sm:text-xl">
        {role === "member" ? (
          <button onClick={handleRequestMusic} className="p-1">
            <BiPaperPlane />
          </button>
        ) : (
          <>
            <button onClick={handlePlayMusic} className="p-1">
              <BiPlay />
            </button>
            <button onClick={handleQueueMusic} className="p-1">
              <BiSolidAddToQueue />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default MusicItem;

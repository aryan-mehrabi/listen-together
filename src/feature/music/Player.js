import React, { useRef, useMemo } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useYTPlayer from "hooks/useYTPlayer";
import useMember from "context/MemberContext";

const Player = () => {
  useYTPlayer();
  const { userId } = useAuth();
  const { channels, selectedChannel } = useChannel();
  const { members } = useMember();
  const { track } = channels[selectedChannel];
  const loadTrack = useRef(track);

  const userMembership = useMemo(
    () =>
      Object.values(members).find(
        member =>
          member.user_id === userId && member.channel_id === selectedChannel
      ),
    [members, userId, selectedChannel]
  );

  return (
    <div className="mt-auto">
      <iframe
        className={
          ["admin", "creator"].includes(userMembership?.role)
            ? ""
            : "pointer-events-none"
        }
        id="yt-player"
        width="100%"
        src={`https://www.youtube.com/embed/${loadTrack.current}?enablejsapi=1&disablekb=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Player;

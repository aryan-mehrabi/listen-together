import React, { useRef } from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import useYTPlayer from "../hooks/useYTPlayer";

const Player = () => {
  useYTPlayer();
  const { userId } = useAuth();
  const { channels, selectedChannel } = useChannel();
  const { track, roles } = channels[selectedChannel];
  const loadTrack = useRef(track);

  return (
    <div className="mt-auto">
      <iframe
        className={
          ["admin", "creator"].includes(roles[userId])
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

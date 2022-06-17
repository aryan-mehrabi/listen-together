import React from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import useYTPlayer from "../hooks/useYTPlayer";

const MusicPlayer = () => {
  useYTPlayer();
  const { userId } = useAuth();
  const { channels, selectedChannel } = useChannel();
  const { track, roles } = channels[selectedChannel];

  return (
    <iframe
      className={["admin", "creator"].includes(roles[userId]) ? "" : "pointer-events-none"}
      id="yt-player"
      width="100%"
      src={`https://www.youtube.com/embed/${track}?enablejsapi=1`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default MusicPlayer;

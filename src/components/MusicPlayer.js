import React, { useRef } from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import useSyncPlayer from "../hooks/useSyncPlayer";

const MusicPlayer = () => {
  const ref = useRef(null);
  useSyncPlayer(ref);
  const { userId } = useAuth();
  const { channels, selectedChannel } = useChannel();
  const { track, roles } = channels[selectedChannel];

  return (
    <iframe
      className={`${
        ["creator", "admin"].includes(roles[userId])
          ? ""
          : "pointer-events-none"
      }`}
      ref={ref}
      width="100%"
      height="150"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%231a1d1e&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&download=false&sharing=false&single_active=false`}
    ></iframe>
  );
};

export default MusicPlayer;

import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ widget }) => {
  const ref = useRef();
  const [track, setTrack] = useState("303102630");

  useEffect(() => {
    widget.current = window.SC.Widget(ref.current);
  }, []);

  return (
    <iframe
      // className={`pointer-events-none`}
      ref={ref}
      width="100%"
      height="150"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%231a1d1e&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true&download=false&sharing=false&single_active=false`}
    ></iframe>
  );
};

export default MusicPlayer;

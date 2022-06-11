import React, { useEffect, useRef, useState } from "react";
import useChannel from "../context/ChannelContext";

const MusicPlayer = ({ widget }) => {
  const ref = useRef();
  const { channels, selectedChannel, playTrack, pauseTrack, seekTrack } =
    useChannel();
  const { track, position, isPlaying } = channels[selectedChannel];

  useEffect(() => {
    widget.current = window.SC.Widget(ref.current);
    widget.current.bind(window.SC.Widget.Events.READY, () => {
      widget.current.bind(window.SC.Widget.Events.PLAY, () => {
        // do this on click play
        widget.current.getPosition(position => {
          console.log("play on event handlere");
          playTrack(position);
        });
      });
      widget.current.bind(window.SC.Widget.Events.PAUSE, () => {
        // do this on click pause
        console.log("pause on event handlere");
        pauseTrack();
      });
      widget.current.bind(window.SC.Widget.Events.SEEK, () => {
        // do this on click seek
        widget.current.getPosition(position => {
          seekTrack(position)
        });
      });
    });
  }, []);

  useEffect(() => {
    widget.current.bind(window.SC.Widget.Events.READY, () => {
      widget.current.isPaused(isPaused => {
        if (isPlaying && isPaused) {
          widget.current.play();
        } else if (!isPlaying && !isPaused) {
          widget.current.pause();
        }
      });
    });
  }, [isPlaying]);

  useEffect(() => {
    widget.current.bind(window.SC.Widget.Events.READY, () => {
      widget.current.seekTo(position);
    });
  }, [position]);

  return (
    <iframe
      // className={`pointer-events-none`}
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

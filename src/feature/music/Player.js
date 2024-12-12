import React, { useRef, useEffect } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useMember from "context/MemberContext";
import YouTube from "react-youtube";

const Player = () => {
  const { userId } = useAuth();
  const {
    channels,
    selectedChannel,
    playTrack,
    pauseTrack,
    player,
    setVideoTitle,
    setPlayerState,
  } = useChannel();
  const { members } = useMember();
  const { track, position, is_playing } = channels[selectedChannel];
  const retryCount = useRef(0);
  const intervalId = useRef();

  const userMembership = Object.values(members).find(
    (member) =>
      member.user_id === userId && member.channel_id === selectedChannel
  );

  const onReady = (e) => {
    player.current = e.target;
    setVideoTitle(e.target.videoTitle);
    e.target.seekTo(position);
    if (!is_playing) {
      e.target.pauseVideo();
    }
  };

  const onStateChange = (e) => {
    const playing = window.YT.PlayerState.PLAYING;
    const playerTime = e.target.getCurrentTime();
    const pauseStates = [-1, 0, 2, 5];

    if (document.hidden) {
      if (e.data === playing && !is_playing) {
        e.target.pauseVideo();
      } else if (pauseStates.includes(e.data) && is_playing) {
        e.target.playVideo();
        if (!intervalId.current) {
          intervalId.current = setInterval(() => {
            retryCount.current++;
            if (
              player.current.getPlayerState() === YouTube.PlayerState.PAUSED
            ) {
              player.current.playVideo();
            }
            if (retryCount.current > 10) {
              clearInterval(intervalId.current);
              intervalId.current = null;
              retryCount.current = 0;
            }
          }, 50);
        }
      }
      return;
    }

    setPlayerState(e.data);

    if (e.data === playing && !is_playing) {
      playTrack(playerTime);
    } else if (pauseStates.includes(e.data) && is_playing) {
      pauseTrack();
    }
  };

  useEffect(() => {
    if (!is_playing) {
      player.current?.pauseVideo();
    } else {
      player.current?.playVideo();
    }
  }, [is_playing]);

  useEffect(() => {
    player.current?.seekTo(position);
  }, [position]);

  return (
    <YouTube
      videoId={track}
      iframeClassName={
        ["admin", "creator"].includes(userMembership?.role)
          ? ""
          : "pointer-events-none"
      }
      opts={{
        origin: process.env.REACT_APP_BASE_URL,
        width: "100%",
        height: "250px",
        playerVars: {
          autoplay: 1,
          enablejsapi: 1,
          disablekb: 1,
          origin: process.env.REACT_APP_BASE_URL,
        },
      }}
      onReady={onReady}
      onStateChange={onStateChange}
    />
  );
};

export default Player;

import React, { useRef, useEffect } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useMember from "context/MemberContext";
import YouTube from "react-youtube";
import useTrack from "context/TrackContext";

const Player = () => {
  const { userId } = useAuth();
  const { tracks } = useTrack();
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
  const { position, is_playing, start_at } = channels[selectedChannel];
  const track = tracks[selectedChannel];
  const retryCount = useRef(0);
  const intervalId = useRef();

  const userMembership = Object.values(members).find(
    (member) =>
      member.user_id === userId && member.channel_id === selectedChannel
  );

  const getCurrentTime = () => {
    const now = Date.now();
    const startAt = new Date(start_at);
    return (now - startAt.getTime()) / 1000;
  };

  const onReady = (e) => {
    player.current = e.target;
    setVideoTitle(e.target.videoTitle);
    if (!is_playing) {
      e.target.seekTo(position);
      e.target.pauseVideo();
    } else {
      e.target.seekTo(position + getCurrentTime());
      e.target.playVideo();
    }
  };

  const onStateChange = (e) => {
    const UNSTARTED = window.YT.PlayerState.UNSTARTED; // -1
    const ENDED = window.YT.PlayerState.ENDED; // 0
    const PLAYING = window.YT.PlayerState.PLAYING; // 1
    const PAUSED = window.YT.PlayerState.PAUSED; // 2
    const BUFFERING = window.YT.PlayerState.BUFFERING; // 3
    const CUED = window.YT.PlayerState.CUED; // 5
    const playerTime = e.target.getCurrentTime();
    const duration = e.target.getDuration();
    const pauseStates = [PAUSED, ENDED];

    if (document.hidden) {
      if (e.data === PLAYING && !is_playing) {
        e.target.pauseVideo();
      } else if (pauseStates.includes(e.data) && is_playing) {
        e.target.playVideo();
      }
      return;
    }

    setPlayerState(e.data);

    if (e.data === PLAYING && !is_playing) {
      playTrack({ position: playerTime, duration });
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
      videoId={track?.track_id}
      iframeClassName={
        ["admin", "creator"].includes(userMembership?.role)
          ? ""
          : "pointer-events-none"
      }
      opts={{
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

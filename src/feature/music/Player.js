import React, { useEffect } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useMember from "context/MemberContext";
import YouTube from "react-youtube";
import useTrack from "context/TrackContext";

const Player = () => {
  const PLAY_DELAY = 1; // seconds
  const { userId } = useAuth();
  const { tracks, playNextTrack } = useTrack();
  const {
    channels,
    selectedChannel,
    playTrack,
    pauseTrack,
    player,
    setVideoTitle,
    setPlayerState,
    setChannelPresenceState,
  } = useChannel();
  const { members } = useMember();
  const { position, is_playing, start_at, track_id } =
    channels[selectedChannel];
  const track = tracks[selectedChannel]?.[track_id];

  const trackId = track?.track_id;

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
      e.target.seekTo(position + getCurrentTime() + PLAY_DELAY);
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

    if (e.data === ENDED) {
      const nextTrack = Object.values(tracks[selectedChannel]).find(
        (tr) => tr.position === track.position + 1
      );
      if (nextTrack) {
        playNextTrack(nextTrack.id, selectedChannel);
      }
      return;
    }

    if (e.data === PLAYING) {
      setChannelPresenceState(true);
    } else {
      setChannelPresenceState(false);
    }

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
      // if (
      //   Math.abs(
      //     position + getCurrentTime() - player.current?.getCurrentTime()
      //   ) > 1
      // ) {
      //   player.current?.seekTo(position + getCurrentTime());
      // }
      player.current?.playVideo();
    }
  }, [is_playing]);

  useEffect(() => {
    try {
      if (!player.current || !player.current?.h || !player.current?.g) {
        return;
      }
      player.current?.seekTo?.(position);
    } catch (error) {
      console.error(error);
    }
  }, [position]);

  return (
    <div className="min-h-[220px]">
      {trackId && (
        <YouTube
          videoId={trackId}
          iframeClassName={
            ["admin", "creator"].includes(userMembership?.role)
              ? ""
              : "pointer-events-none"
          }
          opts={{
            width: "100%",
            height: "220px",
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
      )}
    </div>
  );
};

export default Player;

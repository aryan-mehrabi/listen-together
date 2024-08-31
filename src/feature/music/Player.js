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
    <div className="mt-auto">
      <YouTube
        videoId={track}
        iframeClassName={
          ["admin", "creator"].includes(userMembership?.role)
            ? ""
            : "pointer-events-none"
        }
        opts={{
          width: "100%",
          height: "auto",
          playerVars: { autoplay: 1, enablejsapi: 1, disablekb: 1 },
        }}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default Player;

import { useEffect, useRef, useState } from "react";
import useChannel from "../context/ChannelContext";
import useEventCallback from "./useEventCallback";

const useYTPlayer = () => {
  const [player, setPlayer] = useState(null);
  const { channels, selectedChannel, playTrack, pauseTrack } = useChannel();
  const { position, isPlaying, track } = channels[selectedChannel];
  const playerPosition = useRef(position);

  // send server changes on player and prevent from resending
  const onPlayerStateChange = useEventCallback(
    event => {
      const playing = window.YT.PlayerState.PLAYING;
      const playerTime = event.target.getCurrentTime();
      const pauseStates = [-1, 0, 2, 5];

      if (event.data === playing && !isPlaying) {
        playTrack(playerTime);
      } else if (pauseStates.includes(event.data) && isPlaying) {
        pauseTrack();
      }
    },
    [isPlaying]
  );

  // sync player with server on mount
  const onPlayerReady = event => {
    event.target.seekTo(position);
    if (!isPlaying) {
      event.target.pauseVideo();
    }
  };

  // initialize yt player
  useEffect(() => {
    (() => {
      setPlayer(
        new window.YT.Player("yt-player", {
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        })
      );
    })();
  }, []);

  // receive status from server and take the appropriate action
  useEffect(() => {
    if (!isPlaying) {
      player?.pauseVideo();
    } else {
      player?.playVideo();
    }
  }, [isPlaying]);

  useEffect(() => {
    player?.seekTo(position);
  }, [position]);

  useEffect(() => {
    player?.loadVideoById(track);
  }, [track]);
};

export default useYTPlayer;

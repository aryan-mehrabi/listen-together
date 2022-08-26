import { useEffect, useState } from "react";
import useChannel from "context/ChannelContext";
import useEventCallback from "./useEventCallback";

const useYTPlayer = () => {
  const [player, setPlayer] = useState(null);
  const { channels, selectedChannel, playTrack, pauseTrack } = useChannel();
  const { position, isPlaying, track } = channels[selectedChannel];

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

  const removeCallbacks = useEventCallback(() => {
    player.removeEventListener("onReady", onPlayerReady);
    player.removeEventListener("onStateChange", onPlayerStateChange);
    player.destroy();
  }, [player]);

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
    return removeCallbacks;
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
    if (player?.seekTo) {
      player.seekTo(position);
    }
  }, [position]);

  useEffect(() => {
    if (player?.loadVideoById) {
      player.loadVideoById(track);
    }
  }, [track]);
};

export default useYTPlayer;

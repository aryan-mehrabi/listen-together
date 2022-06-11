import { useEffect } from "react";
import useChannel from "../context/ChannelContext";

const useSyncPlayer = ref => {
  const { channels, selectedChannel, playTrack, pauseTrack, seekTrack } =
    useChannel();
  const { position, isPlaying } = channels[selectedChannel];
  const soundcloudWidget = window.SC.Widget;

  useEffect(() => {
    const widget = soundcloudWidget(ref.current);
    widget.bind(soundcloudWidget.Events.READY, () => {
      widget.bind(soundcloudWidget.Events.PLAY, () => {
        widget.getPosition(position => {
          playTrack(position);
        });
      });

      widget.bind(soundcloudWidget.Events.PAUSE, () => {
        pauseTrack();
      });

      widget.bind(soundcloudWidget.Events.SEEK, () => {
        widget.getPosition(position => {
          seekTrack(position);
        });
      });
    });
  }, []);

  useEffect(() => {
    const widget = soundcloudWidget(ref.current);
    widget.bind(soundcloudWidget.Events.READY, () => {
      widget.isPaused(isPlayerPaused => {
        if (isPlaying && isPlayerPaused) {
          widget.play();
        } else if (!isPlaying && !isPlayerPaused) {
          widget.pause();
        }
      });
    });
  }, [isPlaying]);

  useEffect(() => {
    const widget = soundcloudWidget(ref.current);
    widget.bind(soundcloudWidget.Events.READY, () => {
      widget.seekTo(position);
    });
  }, [position]);
};

export default useSyncPlayer;

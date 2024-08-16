import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useMember from "context/MemberContext";
import useRightSidebar from "context/RightSidebarContext";
import useError from "hooks/useError";
import { useState } from "react";

export default function ChannelMusicPlayerBanner() {
  // const [time, setTime] = useState(0);
  const { userId } = useAuth();
  const { members } = useMember();
  const { videoTitle, player, playerState, selectedChannel } = useChannel();
  const { setRightSidebar } = useRightSidebar();
  const userMembership = Object.values(members).find(
    (member) =>
      member.user_id === userId && member.channel_id === selectedChannel
  );
  const [error, setError] = useState("");
  const errorComponent = useError(error, () => setError(""));
  // function secondsToMinutes(time) {
  //   return Math.floor(time / 60) + ":" + Math.floor(time % 60);
  // }

  // useEffect(() => {
  //   const { is_playing } = channels[selectedChannel];
  //   let intervalId;
  //   if (is_playing) {
  //     intervalId = setInterval(() => {
  //       setTime(player.current?.getCurrentTime());
  //     }, 1000);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [channels, selectedChannel]);

  const pauseStates = [-1, 0, 2, 5];

  const handleClickPlay = (e) => {
    e.stopPropagation();
    if (userMembership?.role !== "member") {
      if (pauseStates.includes(playerState)) {
        player.current.playVideo();
      } else {
        player.current.pauseVideo();
      }
    } else {
      setError("You don't have permission to play song. Please ask admins.");
    }
  };

  const handleClickPlayerBanner = () => {
    setRightSidebar("player");
  };

  return (
    player.current && (
      <div
        onClick={handleClickPlayerBanner}
        className="flex gap-3 border-b border-neutral-700 py-2 px-4 cursor-pointer"
      >
        <button type="button" onClick={handleClickPlay}>
          {pauseStates.includes(playerState) ? (
            <i className="fa-solid fa-play"></i>
          ) : (
            <i className="fa-solid fa-pause"></i>
          )}
        </button>
        <p className="overflow-hidden whitespace-nowrap text-ellipsis">
          {videoTitle}
        </p>
        {/* {secondsToMinutes(time)}/
        {secondsToMinutes(player.current?.getDuration())} */}
        {errorComponent}
      </div>
    )
  );
}

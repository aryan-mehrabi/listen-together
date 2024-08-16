import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";

export default function ChannelMusicPlayerBanner() {
  // const [time, setTime] = useState(0);
  const { videoTitle, player, playerState } = useChannel();
  const { setRightSidebar } = useRightSidebar();

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
    if (pauseStates.includes(playerState)) {
      player.current.playVideo();
    } else {
      player.current.pauseVideo();
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
        <p>{videoTitle}</p>
        {/* {secondsToMinutes(time)}/
        {secondsToMinutes(player.current?.getDuration())} */}
      </div>
    )
  );
}

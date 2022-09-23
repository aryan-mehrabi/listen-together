import React from "react";
import useRightSidebar from "context/RightSidebarContext";
import SearchMusic from "./SearchMusic";
import Player from "./Player";

const MusicSettings = () => {
  const { rightSidebar } = useRightSidebar();
  
  return (
    <div
      className={`${
        rightSidebar === "player" ? "" : "hidden"
      } w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[200px] sm:max-w-sm 
        flex flex-col`}
    >
      {rightSidebar === "player" && <SearchMusic />}
      <Player />
    </div>
  );
};

export default MusicSettings;

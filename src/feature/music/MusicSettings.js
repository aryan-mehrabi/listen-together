import React from "react";
import SearchMusic from "./SearchMusic";
import Player from "./Player";

const MusicSettings = ({ rightSideBar, setRightSideBar }) => {
  return (
    <div
      className={`${
        rightSideBar === "player" ? "" : "hidden"
      } w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[200px] sm:max-w-sm 
        flex flex-col`}
    >
      {rightSideBar === "player" && <SearchMusic {...{setRightSideBar}} />}
      <Player />
    </div>
  );
};

export default MusicSettings;

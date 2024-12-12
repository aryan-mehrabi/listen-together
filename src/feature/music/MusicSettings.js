import React from "react";
import useRightSidebar from "context/RightSidebarContext";
import SearchMusic from "./SearchMusic";
import Player from "./Player";

const MusicSettings = () => {
  const { rightSidebar, setRightSidebar } = useRightSidebar();

  return (
    <div
      className={`${
        rightSidebar === "player" ? "" : "hidden"
      } w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[200px] sm:max-w-sm 
        flex flex-col`}
    >
      {/* {rightSidebar === "player" && <SearchMusic />} */}
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Music Playback</h2>
          <i
            onClick={() => setRightSidebar("")}
            className="fa-solid fa-xmark text-3xl cursor-pointer"
          ></i>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default MusicSettings;

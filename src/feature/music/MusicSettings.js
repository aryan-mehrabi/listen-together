import React from "react";
import useRightSidebar from "context/RightSidebarContext";
import SearchMusic from "./SearchMusic";
import Player from "./Player";
import { BiX } from "react-icons/bi";

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
          <button type="button" onClick={() => setRightSidebar("")}>
            <BiX className="text-3xl" />
          </button>
        </div>
      </div>
      <Player />
    </div>
  );
};

export default MusicSettings;

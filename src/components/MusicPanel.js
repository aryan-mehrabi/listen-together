import React, { useRef } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPanel = ({ rightSideBar }) => {
  const widget = useRef();

  return (
    <div
      className={`${
        rightSideBar === "player" ? "" : "hidden"
      } w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[150px] sm:max-w-sm overflow-auto`}
    >
      <MusicPlayer {...{ widget }} />
      {rightSideBar === "player" && <div className={``}>asd</div>}
    </div>
  );
};

export default MusicPanel;

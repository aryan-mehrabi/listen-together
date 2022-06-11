import React, { useRef } from "react";
import MusicPlayer from "./MusicPlayer";

const MusicPanel = ({ rightSideBar, setRightSideBar }) => {
  const widget = useRef();

  return (
    <div
      className={`${
        rightSideBar === "player" ? "" : "hidden"
      } w-full sm:border-l sm:border-neutral-700 sm:w-[37%] sm:min-w-[150px] sm:max-w-sm overflow-auto 
        flex flex-col`}
    >
      {rightSideBar === "player" && (
        <>
          <div className="px-5 pt-5">
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold">Search Music</h2>
              <i
                onClick={() => setRightSideBar("")}
                className="fa-solid fa-xmark text-3xl cursor-pointer"
              ></i>
            </div>
            <input
              placeholder="Search for artists, tracks"
              type="text"
              className="w-full mt-6 mb-2 bg-neutral-700 p-2 rounded-sm"
            />
          </div>
          <div className="overflow-auto px-5">
            <div className="flex border-b border-neutral-700 py-2">
              <div>
                <p className="text-lg font-medium my-1">song name</p>
                <p className="my-1">artist name</p>
              </div>
              <button className="ml-auto text-xl p-2">
                <i className="fa-solid fa-play"></i>
              </button>
            </div>
            <div className="flex border-b border-neutral-700 py-2">
              <div>
                <p className="text-lg font-medium my-1">song name</p>
                <p className="my-1">artist name</p>
              </div>
              <button className="ml-auto p-2 font-semibold text-cta">
                Request <br /> Track
              </button>
            </div>
          </div>
        </>
      )}
      <div className="mt-auto">
        <MusicPlayer {...{ widget }} />
      </div>
    </div>
  );
};

export default MusicPanel;

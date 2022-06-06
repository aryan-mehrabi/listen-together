import React from "react";
import useChannel from "../context/ChannelContext";

const ChannelNav = ({ rightSideBar, setRightSideBar }) => {
  const { channels, selectedChannel, setSelectedChannel } = useChannel();

  return (
    <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
      <i
        onClick={() => setSelectedChannel("")}
        className="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"
      ></i>
      <h2 className="text-2xl">{channels[selectedChannel].name}</h2>
      <i
        onClick={() =>
          setRightSideBar(rightSideBar === "player" ? "" : "player")
        }
        className={`fa-solid fa-music cursor-pointer ml-auto mr-6 text-xl ${
          rightSideBar === "player" ? "text-cta" : ""
        }`}
      ></i>
      <i
        onClick={() =>
          setRightSideBar(rightSideBar === "setting" ? "" : "setting")
        }
        className={`fa-solid fa-users-gear text-xl cursor-pointer ${
          rightSideBar === "setting" ? "text-cta" : ""
        }`}
      ></i>
    </nav>
  );
};

export default ChannelNav;

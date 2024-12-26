import React from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMessage from "context/MessageContext";
import {
  BiLeftArrowAlt,
  BiSearch,
  BiSolidCog,
  BiSolidMusic,
  BiSolidSearch,
} from "react-icons/bi";

const ChannelNav = () => {
  const { channels, selectedChannel, setSelectedChannel } = useChannel();
  const { rightSidebar, setRightSidebar } = useRightSidebar();
  const { setReply, setTrack, setAttachments } = useMessage();

  const onClickBack = () => {
    setSelectedChannel("");
    setReply(null);
    setTrack(null);
    setAttachments([]);
  };

  return (
    <nav className="flex gap-3 items-center border-b border-neutral-700 py-4 px-7">
      <button type="button" className="text-2xl p-1" onClick={onClickBack}>
        <BiLeftArrowAlt />
      </button>
      <h2
        title={channels[selectedChannel].name}
        className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {channels[selectedChannel].name}
      </h2>
      <button
        type="button"
        className={`ml-auto  text-2xl  p-1 ${
          rightSidebar === "player" ? "text-cta" : ""
        }`}
        onClick={() =>
          setRightSidebar(rightSidebar === "player" ? "" : "player")
        }
      >
        <BiSolidMusic />
      </button>
      <button
        type="button"
        className={` p-1 text-2xl ${
          rightSidebar === "search" ? "text-cta" : ""
        }`}
        onClick={() =>
          setRightSidebar(rightSidebar === "search" ? "" : "search")
        }
      >
        <BiSearch />
      </button>
      <button
        type="button"
        className={` p-1 text-2xl ${
          rightSidebar === "setting" ? "text-cta" : ""
        }`}
        onClick={() =>
          setRightSidebar(rightSidebar === "setting" ? "" : "setting")
        }
      >
        <BiSolidCog />
      </button>
    </nav>
  );
};

export default ChannelNav;

import React from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMessage from "context/MessageContext";

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
    <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
      <i
        onClick={onClickBack}
        className="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"
      ></i>
      <h2
        title={channels[selectedChannel].name}
        className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {channels[selectedChannel].name}
      </h2>
      <i
        onClick={() =>
          setRightSidebar(rightSidebar === "player" ? "" : "player")
        }
        className={`fa-solid fa-music cursor-pointer ml-auto mr-6 text-xl ${
          rightSidebar === "player" ? "text-cta" : ""
        }`}
      ></i>
      <i
        onClick={() =>
          setRightSidebar(rightSidebar === "search" ? "" : "search")
        }
        className={`fa-solid fa-search cursor-pointer mr-6 text-xl ${
          rightSidebar === "search" ? "text-cta" : ""
        }`}
      ></i>
      <i
        onClick={() =>
          setRightSidebar(rightSidebar === "setting" ? "" : "setting")
        }
        className={`fa-solid fa-gear text-xl cursor-pointer ${
          rightSidebar === "setting" ? "text-cta" : ""
        }`}
      ></i>
    </nav>
  );
};

export default ChannelNav;

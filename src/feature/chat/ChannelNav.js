import React from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMessage from "context/MessageContext";

const ChannelNav = () => {
  const { channels, selectedChannel, setSelectedChannel } = useChannel();
  const { rightSidebar, setRightSidebar } = useRightSidebar();
  const { setReply } = useMessage();

  const onClickBack = () => {
    setSelectedChannel("");
    setReply(null);
  };

  return (
    <nav className="flex items-center border-b border-neutral-700 py-4 px-7">
      <i
        onClick={onClickBack}
        className="fa-solid fa-arrow-left text-xl mr-4 cursor-pointer"
      ></i>
      <h2 className="text-2xl">{channels[selectedChannel].name}</h2>
      <i
        onClick={() =>
          setRightSidebar(rightSidebar === "player" ? "" : "player")
        }
        className={`fa-solid fa-compact-disc cursor-pointer ml-auto mr-6 text-xl ${
          rightSidebar === "player" ? "text-cta" : ""
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

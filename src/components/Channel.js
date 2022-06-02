import React, { useEffect, useState } from "react";
import useChannel from "../context/ChannelContext";
import useMediaQuery from "../hooks/useMediaQuery";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import ChannelNav from "./ChannelNav";
import ChannelSettings from "./ChannelSettings";
import Spinner from "./Spinner";

const Channel = () => {
  const { selectedChannel, listenChannel, channels } = useChannel();
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const channelMain = (
    <div className="flex flex-col flex-grow">
      <ChannelNav {...{ isSettingOpen, setIsSettingOpen }} />
      <ChannelConversation />
      <ChannelMessageInput />
    </div>
  );

  useEffect(() => {
    if (selectedChannel) {
      listenChannel(selectedChannel);
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="h-full flex w-full">
      {isMobile ? (
        isSettingOpen ? (
          <ChannelSettings {...{setIsSettingOpen}} />
        ) : (
          channelMain
        )
      ) : (
        <>
          {channelMain}
          {isSettingOpen && <ChannelSettings {...{setIsSettingOpen}} />}
        </>
      )}
    </section>
  );
};

export default Channel;

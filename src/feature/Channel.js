import React, { useEffect } from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMediaQuery from "hooks/useMediaQuery";
import Chat from "feature/chat/Chat";
import ChannelSettings from "feature/setting/ChannelSettings";
import MusicSettings from "feature/music/MusicSettings";
import Spinner from "components/Spinner";
import useMessage from "context/MessageContext";

const Channel = () => {
  const { selectedChannel, channels } = useChannel();
  const { fetchMessages, subscribeMessagesChannel } = useMessage();
  const { setRightSidebar, rightSidebar } = useRightSidebar();
  const isMobile = useMediaQuery("screen and (max-width: 640px)");

  useEffect(() => {
    if (!isMobile) {
      setRightSidebar("player");
    } else {
      setRightSidebar("");
    }
  }, [isMobile]);

  useEffect(() => {
    let unsubscribe;
    if (selectedChannel) {
      fetchMessages(selectedChannel);
      subscribeMessagesChannel(selectedChannel).then(
        res => (unsubscribe = res)
      );
      if (unsubscribe) {
        return () => unsubscribe();
      }
    }
  }, [selectedChannel]);

  if (!channels[selectedChannel]) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <Spinner className="w-14 h-14" />
      </div>
    );
  }

  const mobile = (
    <>
      {rightSidebar === "setting" ? (
        <ChannelSettings />
      ) : rightSidebar === "" ? (
        <Chat />
      ) : null}
    </>
  );

  const desktop = (
    <>
      <Chat />
      {rightSidebar === "setting" && <ChannelSettings />}
    </>
  );

  return (
    <section className="h-full flex w-full">
      {isMobile ? mobile : desktop}
      <MusicSettings />
    </section>
  );
};

export default Channel;

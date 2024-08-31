import React, { useEffect, useState } from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMediaQuery from "hooks/useMediaQuery";
import Chat from "feature/chat/Chat";
import ChannelSettings from "feature/setting/ChannelSettings";
import MusicSettings from "feature/music/MusicSettings";
import Spinner from "components/Spinner";
import useMessage from "context/MessageContext";
import useMember from "context/MemberContext";

const Channel = () => {
  const { selectedChannel, channels, player } = useChannel();
  const { fetchMessages, subscribeMessagesChannel } = useMessage();
  const { fetchChannelsMember, subscribeChannelsMember } = useMember();
  const { setRightSidebar, rightSidebar } = useRightSidebar();
  const isMobile = useMediaQuery();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isMobile) {
      setRightSidebar("player");
    } else {
      setRightSidebar("");
    }
  }, [isMobile]);

  useEffect(() => {
    let unsubscribeMessages;
    let unsubscribeMembers;
    if (selectedChannel) {
      // if (
      //   !messages[selectedChannel] ||
      //   !Object.keys(messages[selectedChannel]).length
      // ) {
      fetchMessages(selectedChannel);
      // } else {
      //   scrollDownElement.current.scrollIntoView({ behavior: "smooth" });
      // }
      unsubscribeMessages = subscribeMessagesChannel(selectedChannel);
      const fetchChannelMember = async () => {
        setLoading(true);
        await fetchChannelsMember(selectedChannel);
        setLoading(false);
      };
      fetchChannelMember();
      unsubscribeMembers = subscribeChannelsMember(selectedChannel);
    }
    return () => {
      player.current = null;
      unsubscribeMembers();
      unsubscribeMessages();
    };
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
        <Chat loading={loading} />
      ) : null}
    </>
  );

  const desktop = (
    <>
      <Chat loading={loading} />
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

import React, { useEffect, useRef, useState } from "react";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import useMediaQuery from "hooks/useMediaQuery";
import Chat from "feature/chat/Chat";
import ChannelSettings from "feature/setting/ChannelSettings";
import MusicSettings from "feature/music/MusicSettings";
import Spinner from "components/Spinner";
import useMessage from "context/MessageContext";
import useMember from "context/MemberContext";
import SearchMusic from "feature/music/SearchMusic";
import useTrack from "context/TrackContext";

const Channel = () => {
  const {
    selectedChannel,
    channels,
    player,
    fetchChannel,
    subscribePresenceChannel,
    channelPresence,
  } = useChannel();
  const { fetchMessages, subscribeMessagesChannel } = useMessage();
  const { fetchChannelsMember, subscribeChannelsMember } = useMember();
  const { setRightSidebar, rightSidebar } = useRightSidebar();
  const isMobile = useMediaQuery();
  const { fetchTracks, subscribeTracksChannel } = useTrack();
  const [loading, setLoading] = useState(true);
  const unsubscribeTracks = useRef(null);

  useEffect(() => {
    const channel = channels[selectedChannel];
    if (channel?.playlists?.id && !unsubscribeTracks.current) {
      fetchTracks(selectedChannel, channel.playlists.id, channel.tracks.id);
      unsubscribeTracks.current = subscribeTracksChannel(
        channel.playlists.id,
        selectedChannel
      );
    }
    return () => {
      if (!selectedChannel) {
        unsubscribeTracks.current?.();
        unsubscribeTracks.current = null;
      }
    };
  }, [selectedChannel, channels]);

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
      fetchChannel(selectedChannel);
      if (!channelPresence.current) {
        subscribePresenceChannel(selectedChannel);
      }
      fetchMessages(selectedChannel);

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
      channelPresence.current.unsubscribe();
      channelPresence.current = null;
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
      ) : rightSidebar === "search" ? (
        <SearchMusic />
      ) : rightSidebar === "" ? (
        <Chat loading={loading} />
      ) : null}
    </>
  );

  const desktop = (
    <>
      <Chat loading={loading} />
      {rightSidebar === "setting" && <ChannelSettings />}
      {rightSidebar === "search" && <SearchMusic />}
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

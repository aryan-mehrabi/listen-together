import React, { useEffect } from "react";
import Channel from "feature/Channel";
import Sidebar from "feature/Sidebar";
import useChannel from "context/ChannelContext";
import useMediaQuery from "hooks/useMediaQuery";
import { RightSidebarProvider } from "context/RightSidebarContext";
import useMember from "context/MemberContext";
import useAuth from "context/AuthContext";
import useMessage from "context/MessageContext";
import supabase from "auth/supabase";

const Chat = () => {
  const { fetchUsersMember, subscribeUsersMember } = useMember();
  const { selectedChannel, setSelectedChannel, setChannels } = useChannel();
  const { members } = useMember();
  const { userId } = useAuth();
  const { setReply } = useMessage();
  const isMobile = useMediaQuery();

  useEffect(() => {
    fetchUsersMember();
    const unsubscribe = subscribeUsersMember();
    const urlParams = new URLSearchParams(window.location.search);
    const invite = urlParams.get("invite");
    const handleInviteLink = async () => {
      const { data } = await supabase.rpc("add_member_with_invite", {
        link: invite,
      });
      if (data) {
        setChannels([
          { ...data.channels, channel_invites: [data.channel_invites] },
        ]);
        setSelectedChannel(data.channels.id);
        window.history.pushState(
          data,
          "",
          window.location.origin + window.location.pathname
        );
      }
    };
    if (invite) {
      handleInviteLink();
    }
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const membership = Object.values(members).find(
      (member) =>
        member.user_id === userId && member.channel_id === selectedChannel
    );
    if (!membership) {
      setReply(null);
    }
  }, [selectedChannel, members, userId]);

  const mobile = selectedChannel ? <Channel /> : <Sidebar />;

  const desktop = (
    <>
      <Sidebar />
      <main className="bg-blend-multiply bg-repeat bg-primary w-full">
        {selectedChannel ? (
          <Channel />
        ) : (
          <section className="flex items-center justify-center text-center h-full">
            <h1 className="text-4xl font-semibold leading-relaxed text-secondary">
              Select a channel <br /> or <br />
              Create one
            </h1>
          </section>
        )}
      </main>
    </>
  );

  return (
    <RightSidebarProvider>
      <div className="overflow-hidden h-full flex">
        {isMobile ? mobile : desktop}
      </div>
    </RightSidebarProvider>
  );
};

export default Chat;

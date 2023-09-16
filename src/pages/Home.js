import React, { useEffect } from "react";
import Channel from "feature/Channel";
import Sidebar from "feature/Sidebar";
import useChannel from "context/ChannelContext";
import useMediaQuery from "hooks/useMediaQuery";
import { RightSidebarProvider } from "context/RightSidebarContext";
import useMember from "context/MemberContext";
import useAuth from "context/AuthContext";

const Chat = () => {
  const { fetchUsersMember, subscribeUsersMember } = useMember();
  const { selectedChannel, setSelectedChannel } = useChannel();
  const { members } = useMember();
  const { userId } = useAuth();
  const isMobile = useMediaQuery("screen and (max-width: 640px");

  useEffect(() => {
    fetchUsersMember();
    const unsubscribe = subscribeUsersMember();
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const memberShip = Object.values(members).find(
      member =>
        member.user_id === userId && member.channel_id === selectedChannel
    );
    if (!memberShip) {
      setSelectedChannel("");
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

import React, { useEffect } from "react";
import Channel from "feature/Channel";
import Sidebar from "feature/Sidebar";
import useChannel from "context/ChannelContext";
import useMediaQuery from "hooks/useMediaQuery";
import { RightSidebarProvider } from "context/RightSidebarContext";
import useMember from "context/MemberContext";

const Chat = () => {
  const { fetchUsersMember } = useMember();
  const { selectedChannel } = useChannel();
  const isMobile = useMediaQuery("screen and (max-width: 640px");

  useEffect(() => {
    let unsubscribe;
    fetchUsersMember().then(res => (unsubscribe = res));
    return () => unsubscribe();
  }, []);

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

import React from "react";
import Channel from "feature/Channel";
import SideBar from "feature/SideBar";
import useChannel from "context/ChannelContext";
import useMediaQuery from "hooks/useMediaQuery";

const Chat = () => {
  const { selectedChannel } = useChannel();
  const isMobile = useMediaQuery("screen and (max-width: 640px");

  return (
    <>
      <div className="overflow-hidden h-full flex">
        {isMobile ? (
          selectedChannel ? (
            <Channel />
          ) : (
            <SideBar />
          )
        ) : (
          <>
            <SideBar />
            <main className="bg-blend-multiply bg-repeat bg-primary w-3/4">
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
        )}
      </div>
    </>
  );
};

export default Chat;

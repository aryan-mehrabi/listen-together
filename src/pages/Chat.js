import React from "react";
import Channel from "../components/Channel";
import SideBar from "../components/SideBar";
import useChannel from "../context/ChannelContext";

const Chat = () => {
  const { selectedChannel } = useChannel();

  return (
    <>
      <div className="overflow-hidden h-screen bg-primary text-secondary flex">
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
      </div>
    </>
  );
};

export default Chat;

import React, { useState } from "react";
import Channel from "../components/Channel";
import CreateChannel from "../components/CreateChannel";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import { ChannelProvider } from "../context/ChannelContext";

const Chat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <ChannelProvider {...{setIsModalOpen}}>
      {isModalOpen ? (
        <Modal closeModal={setIsModalOpen}>
          <CreateChannel />
        </Modal>
      ) : null}
      <div className="overflow-hidden h-screen bg-primary text-secondary flex">
        <SideBar {...{ setIsModalOpen }} />
        <main className="bg-blend-multiply bg-repeat bg-primary w-3/4">
          <section className="flex items-center justify-center text-center h-full">
            <h1 className="text-4xl font-semibold leading-relaxed text-secondary">
              Select a channel <br /> or <br />
              Create one
            </h1>
          </section>
          {/* <Channel /> */}
        </main>
      </div>
    </ChannelProvider>
  );
};

export default Chat;

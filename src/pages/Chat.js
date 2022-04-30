import React, { useState } from "react";
import ChatRoom from "../components/ChatRoom";
import CreateChatRoom from "../components/CreateChatRoom";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import { ChatRoomProvider } from "../context/ChatRoomContext";

const Chat = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <ChatRoomProvider>
      {isModalOpen ? (
        <Modal closeModal={setIsModalOpen}>
          <CreateChatRoom />
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
          {/* <ChatRoom /> */}
        </main>
      </div>
    </ChatRoomProvider>
  );
};

export default Chat;

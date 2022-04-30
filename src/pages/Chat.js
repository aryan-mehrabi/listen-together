import React, { useState } from "react";
import ChatRoom from "../components/ChatRoom";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";

const Chat = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      {isModalOpen ? (
        <Modal closeModal={setIsModalOpen}>
          <div className="bg-secondary text-primary">hi</div>
        </Modal>
      ) : null}
      <div className="overflow-hidden h-screen bg-primary text-secondary flex">
        <SideBar />
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
    </>
  );
};

export default Chat;

import React from "react";

const Chat = () => {
  return (
    <div className="overflow-hidden h-screen bg-primary text-secondary flex">
      <aside className="w-1/4 border-neutral-700 border-r flex flex-col">
        <div className="flex items-center p-3 border-b border-neutral-700">
          <img
            className="w-10"
            src="https://avatars.dicebear.com/api/human/seed.svg"
            alt="avatar"
          />
          <p className="ml-2">Aryan</p>
          <i title="settings" className="fa-solid fa-ellipsis ml-auto"></i>
        </div>
        <div className="text-center border-b border-neutral-700">
          <button className="bg-cta font-semibold text-primary rounded-sm py-2 px-4 my-4 ">
            Create a Channel
          </button>
        </div>
        <div className="overflow-auto">
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
          <p className="border-b border-neutral-700 py-5 px-3 capitalize">chatroom 1</p>
        </div>
      </aside>
      <main>
        <div>
          <h1>select a chatroom or create one</h1>
        </div>
      </main>
    </div>
  );
};

export default Chat;

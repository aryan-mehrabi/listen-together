import React from "react";
import notesImgUrl from "../assets/music-notes.jpg";

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
          <button className=" font-semibold text-lg text-cta rounded-sm py-2 px-4 my-4 ">
            Create a Channel
          </button>
        </div>
        <div className="overflow-auto">
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
          <div className="flex items-center border-b border-neutral-700 py-5 px-4 capitalize">
            <i class="fa-brands fa-itunes-note text-2xl"></i>
            <p className="ml-4 text-lg">chatroom 1</p>
          </div>
        </div>
      </aside>
      <main
        style={{ backgroundImage: `url("${notesImgUrl}")` }}
        className="bg-blend-multiply bg-repeat bg-primary flex-grow flex items-center justify-center text-center"
      >
        <div>
          <h1 className="text-4xl font-semibold leading-relaxed text-slate-300">
            Select a channel or <br />
            Create one
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Chat;

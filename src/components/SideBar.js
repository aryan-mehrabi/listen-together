import React from "react";
import useAuth from "../context/AuthContext";
import useUser from "../context/UserContext";
import ChatItem from "./ChatItem";

const SideBar = ({ setIsModalOpen }) => {
  const { users } = useUser();
  const { userId } = useAuth();
  const renderChatList = () => {
    return Object.values(users[userId].channels).map(channel => (
      <ChatItem key={channel.id} {...{ channel }} />
    ));
  };

  return (
    <aside className="min-w-[250px] w-1/4 max-w-[400px] border-neutral-700 border-r flex flex-col">
      <div className="flex items-center px-4 py-3 border-b border-neutral-700">
        <img className="w-11" src={users[userId].avatar} alt="avatar" />
        <p className="ml-2 font-semibold">{users[userId].name}</p>
        <i
          title="settings"
          className="fa-solid fa-ellipsis ml-auto text-xl"
        ></i>
      </div>
      <div className="text-center border-b border-neutral-700">
        <button
          onClick={() => setIsModalOpen(true)}
          className=" font-semibold text-lg text-cta rounded-sm py-2 px-4 my-4"
        >
          Create a Channel
        </button>
      </div>
      <div className="overflow-auto">{renderChatList() /* <ChatItem /> */}</div>
    </aside>
  );
};

export default SideBar;

import React, { useState, useRef } from "react";
import useAuth from "../context/AuthContext";
import useModal from "../context/ModalContext";
import useUser from "../context/UserContext";
import ChatItem from "./ChatItem";
import CreateChannel from "./CreateChannel";
import DropDown from "./DropDown";

const SideBar = () => {
  const { setModal } = useModal();
  const [dropdown, setDropdown] = useState(false);
  const { users } = useUser();
  const { userId, logOut } = useAuth();
  const dropdownRef = useRef()

  const renderChatList = () => {
    if (users[userId]?.channels) {
      return Object.values(users[userId].channels).map(channel => (
        <ChatItem key={channel.id} {...{ channel }} />
      ));
    }
  };

  return (
    <aside className="min-w-[250px] w-1/4 max-w-[400px] border-neutral-700 border-r flex flex-col">
      <div className="flex items-center px-4 py-3 border-b border-neutral-700">
        <img className="w-11" src={users[userId]?.avatar} alt="avatar" />
        <p className="ml-2 font-semibold">{users[userId]?.name}</p>
        <div className="ml-auto relative" ref={dropdownRef}>
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            <i title="settings" className="fa-solid fa-ellipsis text-xl"></i>
          </div>
          <DropDown {...{ dropdown, setDropdown, dropdownRef }}>
            <button onClick={logOut} className="text-red-300 py-3 w-full">
              Log Out
            </button>
          </DropDown>
        </div>
      </div>
      <div className="text-center border-b border-neutral-700">
        <button
          onClick={() => setModal(<CreateChannel />)}
          className=" font-semibold text-lg text-cta rounded-sm py-2 px-4 my-4"
        >
          Create a Channel
        </button>
      </div>
      <div className="overflow-auto">{renderChatList()}</div>
    </aside>
  );
};

export default SideBar;

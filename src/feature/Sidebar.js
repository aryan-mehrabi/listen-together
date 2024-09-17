import React, { useState, useRef } from "react";
import useAuth from "context/AuthContext";
import useModal from "context/ModalContext";
import useUser from "context/UserContext";
import ChatItem from "feature/chat/ChatItem";
import CreateChannel from "./CreateChannel";
import DropDown from "components/DropDown";
import Button from "components/Button";
import useMember from "context/MemberContext";
import useChannel from "context/ChannelContext";

const Sidebar = () => {
  const { setModal } = useModal();
  const [dropdown, setDropdown] = useState(false);
  const { users } = useUser();
  const { members } = useMember();
  const { channels, setSelectedChannel } = useChannel();
  const { userId, logOut, isLoading } = useAuth();
  const [element, setElement] = useState(null);

  const handleClickLogout = async () => {
    setDropdown(false);
    await logOut();
    setSelectedChannel("");
  };

  const renderChatList = () => {
    const memberArr = Object.values(members);
    return memberArr
      .filter(
        (member) => member.user_id === userId && channels[member.channel_id]
      )
      .map((member) => (
        <ChatItem
          key={member.channel_id}
          channel={channels[member.channel_id]}
        />
      ));
  };

  return (
    <aside className="w-full sm:min-w-[200px] sm:w-1/4 sm:max-w-[400px] sm:border-neutral-700 sm:border-r flex flex-col">
      <div className="flex items-center px-4 py-3 border-b border-neutral-700">
        <img className="w-11" src={users[userId]?.avatar} alt="avatar" />
        <p className="ml-2 font-semibold">{users[userId]?.name}</p>
        <div className="ml-auto relative" ref={setElement}>
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            <i title="settings" className="fa-solid fa-ellipsis text-xl"></i>
          </div>
          <DropDown {...{ dropdown, setDropdown }} dropdownRef={element}>
            <Button
              type="danger"
              onClick={handleClickLogout}
              className="w-full"
              disabled={isLoading}
            >
              Log Out
            </Button>
          </DropDown>
        </div>
      </div>
      <div className="text-center border-b border-neutral-700">
        <button
          onClick={() => setModal(<CreateChannel />)}
          className="font-semibold sm:text-lg text-cta w-full py-4"
        >
          Create a Channel
        </button>
      </div>
      <div className="overflow-auto">{renderChatList()}</div>
    </aside>
  );
};

export default Sidebar;

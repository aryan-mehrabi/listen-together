import React from "react";
import useAuth from "../context/AuthContext";

const ChannelMessage = ({ message }) => {
  const { userId } = useAuth();
  const { createdAt, from, content, avatar, name } = message;

  const getMessageTime = () => {
    const time = createdAt?.toDate();
    if (!time) return <i class="fa-solid fa-clock text-[11px]"></i>;

    const hour = time.getHours().toString();
    const minute = time.getMinutes().toString();
    return `${hour}:${minute.length === 1 ? "0" : ""}${minute}`;
  };

  if (userId === from) {
    return (
      <div className="ml-auto my-1 max-w-[80%]">
        <div className="bg-secondary rounded-sm p-2 ml-2">
          <p className="text-primary">{content}</p>
          <p className="text-primary opacity-75 mt-1 mb-[-4px] text-sm text-right">
            {getMessageTime()}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-start my-1 max-w-[80%]">
        <img className="w-10 mt-2" src={avatar} alt="avatar" />
        <div className="bg-neutral-700 rounded-sm p-2 ml-2">
          <h6 className="text-lg font-semibold text-cta">{name}</h6>
          <p>{content}</p>
          <p className="text-sm opacity-75 mt-1 mb-[-4px] text-right">
            {getMessageTime()}
          </p>
        </div>
      </div>
    );
  }
};
export default ChannelMessage;

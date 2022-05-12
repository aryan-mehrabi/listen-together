import React from "react";
import useAuth from "../context/AuthContext";

const ChannelMessage = ({ message }) => {
  const { userId } = useAuth();

  if (userId === message.from) {
    return (
      <div className="ml-auto my-1 max-w-[80%]">
        <p className="bg-secondary text-primary rounded-sm p-2 ml-2">
          {message.content}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex items-start my-1 max-w-[80%]">
        <img className="w-10 mt-2" src={message.avatar} alt="avatar" />
        <div className="bg-neutral-700 rounded-sm p-2 ml-2">
          <h6 className="text-lg font-semibold text-cta">{message.name}</h6>
          <p>{message.content}</p>
        </div>
      </div>
    );
  }
};
export default ChannelMessage;

import React from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";

const ChannelMessage = ({ message, roles }) => {
  const { userId } = useAuth();
  const { updateTrack } = useChannel();
  const { createdAt, from, content, avatar, name } = message;

  const getMessageTime = () => {
    const time = createdAt?.toDate();
    if (!time) return <i className="fa-solid fa-clock text-[11px]"></i>;
    const hour = time.getHours().toString();
    const minute = time.getMinutes().toString();
    return `${hour}:${minute.length === 1 ? "0" : ""}${minute}`;
  };

  const messageContent = (() => {
    if (typeof content === "object") {
      return (
        <div className="flex items-center pt-2">
          <img className="w-14 md:w-20" src={content.thumbnail} alt="track thumbnail" />
          <p className="mx-3">{content.title}</p>
          {roles[userId] === "member" || (
            <div
              onClick={() => updateTrack(content.trackId)}
              className="ml-auto text-2xl mr-4 cursor-pointer p-2"
            >
              <i className="fa-solid fa-play"></i>
            </div>
          )}
        </div>
      );
    } else {
      return <p>{content}</p>;
    }
  })();

  if (userId === from) {
    return (
      <div className="ml-auto my-1 max-w-[90%] md:max-w-[80%]">
        <div className="bg-secondary rounded-sm p-2 ml-2">
          <div className="text-primary">{messageContent}</div>
          <p className="text-primary opacity-75 mt-1 mb-[-4px] text-sm text-right">
            {getMessageTime()}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-start my-1 max-w-[90%] md:max-w-[80%]">
        <img className="w-10 mt-2" src={avatar} alt="avatar" />
        <div className="bg-neutral-700 rounded-sm p-2 ml-2">
          <h6 className="text-lg font-semibold text-cta">{name}</h6>
          {messageContent}
          <p className="text-sm opacity-75 mt-1 mb-[-4px] text-right">
            {getMessageTime()}
          </p>
        </div>
      </div>
    );
  }
};
export default ChannelMessage;

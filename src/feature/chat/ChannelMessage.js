import React from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";
import useMember from "context/MemberContext";

const ChannelMessage = ({ message }) => {
  const { userId } = useAuth();
  const { updateTrack, selectedChannel } = useChannel();
  const { users } = useUser();
  const { members } = useMember();
  const { created_at, user_id, content } = message;
  const { role } = Object.values(members).find(
    member => member.channel_id === selectedChannel && member.user_id === userId
  );

  const getMessageTime = () => {
    if (!created_at) return <i className="fa-solid fa-clock text-[11px]"></i>;
    const time = new Date(created_at);
    const hour = time.getHours().toString();
    const minute = time.getMinutes().toString();
    return `${hour}:${minute.length === 1 ? "0" : ""}${minute}`;
  };

  const messageContent = (() => {
    if (!content.body) {
      return (
        <div className="flex items-center pt-2">
          <img
            className="w-14 md:w-20"
            src={content.thumbnail}
            alt="track thumbnail"
          />
          <p className="mx-3">{content.title}</p>
          {role === "member" || (
            <div
              onClick={() => updateTrack(content.track_id)}
              className="ml-auto text-2xl mr-4 cursor-pointer p-2"
            >
              <i className="fa-solid fa-play"></i>
            </div>
          )}
        </div>
      );
    } else {
      return <p>{content.body}</p>;
    }
  })();

  if (userId === user_id) {
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
        <img className="w-10 mt-2" src={users[user_id]?.avatar} alt="avatar" />
        <div className="bg-neutral-700 rounded-sm p-2 ml-2">
          <h6 className="text-lg font-semibold text-cta">
            {users[user_id]?.name}
          </h6>
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

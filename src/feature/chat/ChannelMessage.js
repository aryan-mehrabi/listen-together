import React from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useMember from "context/MemberContext";
import ChannelMessageMore from "./ChannelMessageMore";
import ChannelMessageImage from "./ChannelMessageImage";
import ImageBlob from "components/ImageBlob";
import ChannelMessageReply from "./ChannelMessageReply";

const ChannelMessage = ({ message }) => {
  const { userId } = useAuth();
  const { updateTrack, selectedChannel } = useChannel();
  const { members } = useMember();
  const {
    created_at,
    users: user,
    content,
    message_type,
    attachments,
  } = message;
  const { role } =
    Object.values(members).find(
      (member) =>
        member.channel_id === selectedChannel && member.user_id === userId
    ) || {};

  const getMessageTime = () => {
    if (!created_at) return <i className="fa-solid fa-clock text-[11px]"></i>;
    const time = new Date(created_at);
    const hour = time.getHours().toString();
    const minute = time.getMinutes().toString();
    return `${hour.length === 1 ? "0" : ""}${hour}:${
      minute.length === 1 ? "0" : ""
    }${minute}`;
  };

  const messageContent = (() => {
    if (message_type === "track") {
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
    } else if (message_type === "text") {
      return <p>{content.body}</p>;
    } else if (message_type === "image") {
      return (
        <div className="overflow-hidden max-w-[15rem]">
          <div className="flex flex-col gap-2">
            {attachments.map((image) => (
              <div className="cursor-pointer w-60 h-60">
                {image.url ? (
                  <ChannelMessageImage key={image.id} image={image} />
                ) : (
                  <ImageBlob key={image.name} blob={image} />
                )}
              </div>
            ))}
          </div>
          {content?.body && <p>{content.body}</p>}
        </div>
      );
    }
  })();

  if (userId === user.id) {
    return (
      <div className="flex flex-row-reverse items-center ml-auto my-1 min-w-[100px] max-w-[90%] md:max-w-[80%]">
        <div className="bg-secondary rounded p-2 ml-2 min-w-[150px]">
          <div className="bg-neutral-200 text-neutral-600">
            <ChannelMessageReply message={message} />
          </div>
          <div className="text-primary">{messageContent}</div>
          <p className="text-primary opacity-75 mt-1 -mb-1 text-sm text-right">
            {getMessageTime()}
          </p>
        </div>
        <ChannelMessageMore message={message} />
      </div>
    );
  } else {
    return (
      <div className="flex items-start my-1 max-w-[90%] md:max-w-[80%]">
        <img className="w-10 mt-2" src={user.avatar} alt="avatar" />
        <div className="flex items-center">
          <div className="bg-neutral-700 rounded p-2 mx-2 min-w-[200px]">
            <h6 className="text-lg font-semibold text-cta">{user.name}</h6>
            <div className="my-1 bg-neutral-800 text-neutral-400">
              <ChannelMessageReply message={message} />
            </div>
            {messageContent}
            <p className="text-sm opacity-75 mt-1 -mb-1 text-right">
              {getMessageTime()}
            </p>
          </div>
          <ChannelMessageMore message={message} />
        </div>
      </div>
    );
  }
};
export default ChannelMessage;

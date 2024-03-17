import ImageBlob from "components/ImageBlob";
import ChannelMessageReplyImage from "./ChannelMessageReplyImage";
import useMessage from "context/MessageContext";
import useChannel from "context/ChannelContext";
import useUser from "context/UserContext";

export default function ChannelMessageInputReply() {
  const { messages, reply, setReply } = useMessage();
  const { selectedChannel } = useChannel();
  const { users } = useUser();

  if (!reply) return null;
  const replyMessage = messages[selectedChannel][reply];
  const replyUser = users[replyMessage.user_id];
  return (
    <div className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900">
      <div className="text-cta">
        <i className="fa fa-reply" aria-hidden="true"></i>
      </div>
      {replyMessage.message_type === "track" && (
        <div className="w-16">
          <img
            className="w-full h-full"
            src={replyMessage.content.thumbnail}
            alt=""
          />
        </div>
      )}
      {replyMessage.message_type === "image" && (
        <div className="w-16 h-16">
          {replyMessage.attachments[0].url ? (
            <ChannelMessageReplyImage image={replyMessage.attachments[0]} />
          ) : (
            <ImageBlob blob={replyMessage.attachments[0]} />
          )}
        </div>
      )}
      <div>
        <p className="text-cta">Reply to {replyUser.name}</p>
        <p className="text-neutral-400">
          {replyMessage.content.body || replyMessage.content.title}
        </p>
      </div>
      <div className="ml-auto cursor-pointer" onClick={() => setReply(null)}>
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
      </div>
    </div>
  );
}

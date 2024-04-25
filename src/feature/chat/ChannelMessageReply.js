import useChannel from "context/ChannelContext";
import useMessage from "context/MessageContext";
import useUser from "context/UserContext";
import ChannelMessageReplyImage from "./ChannelMessageReplyImage";
import ImageBlob from "components/ImageBlob";

export default function ChannelMessageReply({ message }) {
  const { messages } = useMessage();
  const { selectedChannel } = useChannel();
  const { users } = useUser();

  if (!message.reply_id) return;

  const replyMessage = messages[selectedChannel][message.reply_id];
  const replyUser = users?.[replyMessage?.user_id];

  const renderReply = () => {
    if (!replyMessage || !replyUser) {
      return <p>Message Not Loaded</p>;
    }

    return (
      <>
        {replyMessage.message_type === "track" && (
          <div className="w-10">
            <img
              className="w-full h-full object-cover"
              src={replyMessage.content.thumbnail}
              alt=""
            />
          </div>
        )}
        {replyMessage.message_type === "image" && (
          <div className="w-10 h-10">
            {replyMessage.attachments[0].url ? (
              <ChannelMessageReplyImage image={replyMessage.attachments[0]} />
            ) : (
              <ImageBlob blob={replyMessage.attachments[0]} />
            )}
          </div>
        )}
        <div className="text-sm">
          <p className="text-cta">{replyUser?.name}</p>
          <p>
            {replyMessage.message_type === "text"
              ? replyMessage.content.body
              : replyMessage.message_type === "track"
              ? replyMessage.content.title
              : replyMessage.message_type === "image"
              ? replyMessage.content.body || "Photo"
              : null}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="border-l-cta border-l-4 mb-1 p-1 rounded-sm flex gap-1">
      {renderReply()}
    </div>
  );
}

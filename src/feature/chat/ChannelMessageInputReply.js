import ImageBlob from "components/ImageBlob";
import ChannelMessageReplyImage from "./ChannelMessageReplyImage";
import useMessage from "context/MessageContext";
import useChannel from "context/ChannelContext";
import MessageBanner from "components/MessageBanner";
import { BiReply } from "react-icons/bi";
import { decodeHtml, getVideoThumbnail } from "helpers";

export default function ChannelMessageInputReply() {
  const { messages, reply, setReply } = useMessage();
  const { selectedChannel } = useChannel();

  if (!reply) return null;
  const replyMessage = messages[selectedChannel][reply];

  return (
    <>
      <MessageBanner
        icon={<BiReply className="text-2xl" />}
        image={
          replyMessage.message_type === "track" ? (
            <img
              className="w-full h-full"
              src={getVideoThumbnail(replyMessage.content.track_id)}
              alt=""
            />
          ) : replyMessage.message_type === "image" ? (
            replyMessage.attachments[0].url ? (
              <ChannelMessageReplyImage image={replyMessage.attachments[0]} />
            ) : (
              <ImageBlob blob={replyMessage.attachments[0]} />
            )
          ) : null
        }
        title={`Reply to ${replyMessage.users.name}`}
        subtitle={
          replyMessage.content.body || decodeHtml(replyMessage.content.title)
        }
        onClose={() => setReply(null)}
      />
    </>
  );
}

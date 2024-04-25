import ChannelMessageReplyImage from "./ChannelMessageReplyImage";
import ImageBlob from "components/ImageBlob";

export default function ChannelMessageReply({
  message: { replied_message, users: user },
}) {
  if (!replied_message) return;

  const renderReply = () => {
    return (
      <>
        {replied_message.message_type === "track" && (
          <div className="w-10">
            <img
              className="w-full h-full object-cover"
              src={replied_message.content.thumbnail}
              alt=""
            />
          </div>
        )}
        {replied_message.message_type === "image" && (
          <div className="w-10 h-10">
            {replied_message.attachments[0].url ? (
              <ChannelMessageReplyImage
                image={replied_message.attachments[0]}
              />
            ) : (
              <ImageBlob blob={replied_message.attachments[0]} />
            )}
          </div>
        )}
        <div className="text-sm">
          <p className="text-cta">{user.name}</p>
          <p>
            {replied_message.message_type === "text"
              ? replied_message.content.body
              : replied_message.message_type === "track"
              ? replied_message.content.title
              : replied_message.message_type === "image"
              ? replied_message.content.body || "Photo"
              : null}
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="border-l-cta border-l-4 mb-1 p-1 rounded flex gap-1">
      {renderReply()}
    </div>
  );
}

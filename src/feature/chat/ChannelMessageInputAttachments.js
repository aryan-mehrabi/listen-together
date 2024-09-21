import MessageBanner from "components/MessageBanner";
import useMessage from "context/MessageContext";

export default function ChannelMessageInputAttachments() {
  const { attachments, setAttachments } = useMessage();

  if (!attachments.length) return null;
  return (
    <div className="max-h-[300px] overflow-y-auto">
      {attachments.map((attachment) => (
        <MessageBanner
          key={attachment.name}
          image={
            <img
              className="w-full h-full object-cover"
              src={URL.createObjectURL(attachment)}
              alt=""
            />
          }
          title={attachment.name}
          subtitle={`size: ${Math.floor(attachment.size / 1000)}kb`}
          onClose={() =>
            setAttachments(
              attachments.filter((file) => file.name !== attachment.name)
            )
          }
        />
      ))}
    </div>
  );
}

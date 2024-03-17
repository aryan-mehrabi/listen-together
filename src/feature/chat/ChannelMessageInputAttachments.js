import useMessage from "context/MessageContext";

export default function ChannelMessageInputAttachments() {
  const { attachments, setAttachments } = useMessage();

  if (!attachments.length) return null;
  return attachments.map((attachment) => (
    <div
      key={attachment.name}
      className="flex items-center gap-2 px-3 py-1 border-t border-neutral-700 shadow-t-md shadow-neutral-900"
    >
      <div className="w-16">
        <img
          className="w-full h-full"
          src={URL.createObjectURL(attachment)}
          alt=""
        />
      </div>
      <div>
        <p className="text-cta">{attachment.name}</p>
        <p className="text-neutral-400">
          size: {Math.floor(attachment.size / 1000)}kb
        </p>
      </div>
      <div
        className="ml-auto cursor-pointer"
        onClick={() =>
          setAttachments(
            attachments.filter((file) => file.name !== attachment.name)
          )
        }
      >
        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
      </div>
    </div>
  ));
}

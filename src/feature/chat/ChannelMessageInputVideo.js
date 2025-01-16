import MessageBanner from "components/MessageBanner";
import useMessage from "context/MessageContext";
import { getVideoThumbnail } from "helpers";

const ChannelMessageInputVideo = ({ track }) => {
  const { setTrack } = useMessage();

  return (
    <MessageBanner
      title={track.title}
      image={
        <img
          alt="youtube video thumbnail"
          src={getVideoThumbnail(track.track_id)}
        />
      }
      onClose={() => setTrack(null)}
    />
  );
};

export default ChannelMessageInputVideo;

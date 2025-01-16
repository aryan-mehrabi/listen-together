import MessageBanner from "components/MessageBanner";
import useMessage from "context/MessageContext";
import { decodeHtml, getVideoThumbnail } from "helpers";

const ChannelMessageInputVideo = ({ track }) => {
  const { setTrack } = useMessage();

  return (
    <MessageBanner
      title={decodeHtml(track.title)}
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

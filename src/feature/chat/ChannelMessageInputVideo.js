import MessageBanner from "components/MessageBanner";
import useMessage from "context/MessageContext";

const ChannelMessageInputVideo = ({ track }) => {
  const { setTrack } = useMessage();

  return (
    <MessageBanner
      title={track.title}
      image={<img alt="youtube video thumbnail" src={track.thumbnail} />}
      onClose={() => setTrack(null)}
    />
  );
};

export default ChannelMessageInputVideo;

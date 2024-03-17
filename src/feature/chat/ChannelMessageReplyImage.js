import ImageBlob from "components/ImageBlob";
import useFetchImage from "hooks/useFetchImage";

export default function ChannelMessageReplyImage({ image }) {
  const { data } = useFetchImage(image.url);
  if (!data) return;
  return <ImageBlob blob={data} />;
}

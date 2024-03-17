import ImageBlob from "components/ImageBlob";
import useFetchImage from "hooks/useFetchImage";

export default function ChannelMessageImageReply({ image }) {
  const { data } = useFetchImage(image.url);
  if (!data) return null;
  return <ImageBlob blob={data} />;
}

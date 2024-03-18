import ImageBlob from "components/ImageBlob";
import useFetchImage from "hooks/useFetchImage";
import ImagePlaceholder from "assets/placeholder-image.png";

export default function ChannelMessageReplyImage({ image }) {
  const { data } = useFetchImage(image.url);
  if (!data)
    return (
      <img src={ImagePlaceholder} className="w-full h-full object-cover" />
    );
  return <ImageBlob blob={data} />;
}

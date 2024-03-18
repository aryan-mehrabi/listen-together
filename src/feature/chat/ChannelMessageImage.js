import React from "react";
import Spinner from "components/Spinner";
import useFetchImage from "hooks/useFetchImage";
import useModal from "context/ModalContext";
import ImageBlob from "components/ImageBlob";
import ImagePlaceholder from "assets/placeholder-image.png";

const ChannelMessageImage = ({ image }) => {
  const { data, status, refetch } = useFetchImage(image.url);
  const { setModal } = useModal();

  if (status === "idle" || status === "loading")
    return (
      <div
        onClick={() => refetch()}
        className="h-full bg-slate-300"
        style={{
          backgroundImage: `url(${ImagePlaceholder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center w-full h-full">
          {status === "idle" ? (
            <div className="flex items-center justify-center w-14 h-14 text-primary border-2 border-primary p-3 rounded-full">
              <i className="fa-solid fa-arrow-down text-2xl"></i>
            </div>
          ) : (
            <Spinner className="w-14 h-14" />
          )}
        </div>
      </div>
    );

  return (
    <div
      className="contents"
      onClick={() => setModal(<ImageBlob blob={data} />)}
    >
      <ImageBlob blob={data} />
    </div>
  );
};

export default ChannelMessageImage;

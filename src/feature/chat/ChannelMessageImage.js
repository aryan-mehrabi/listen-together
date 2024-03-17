import React from "react";
import Spinner from "components/Spinner";
import useFetchImage from "hooks/useFetchImage";
import useModal from "context/ModalContext";
import ImageBlob from "components/ImageBlob";

const ChannelMessageImage = ({ image }) => {
  const { data, status, refetch } = useFetchImage(image.url);
  const { setModal } = useModal();

  const renderImage = () => {
    if (status === "idle")
      return (
        <div
          onClick={() => refetch()}
          className="flex justify-center items-center h-full"
        >
          <div className="flex items-center justify-center w-14 h-14 border-2 border-primary p-3 rounded-full">
            <i className="fa-solid fa-arrow-down text-2xl"></i>
          </div>
        </div>
      );

    if (status === "loading")
      return (
        <div className="flex justify-center items-center h-full">
          <Spinner className="w-14 h-14" />
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
  return <div className="cursor-pointer w-60 h-60">{renderImage()}</div>;
};

export default ChannelMessageImage;

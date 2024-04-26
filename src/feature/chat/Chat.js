import React, { useState } from "react";
import ChannelNav from "./ChannelNav";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import DropZone from "components/DropZone";
import useMessage from "context/MessageContext";
import { filterImageFiles } from "helpers";

const Chat = () => {
  const [isDragged, setIsDragged] = useState(false);
  const { setAttachments } = useMessage();

  const onDropFiles = (files) => {
    const allowedFiles = files.filter(filterImageFiles);
    setAttachments(allowedFiles);
  };

  return (
    <DropZone onDrop={onDropFiles} onIsDraggedChange={setIsDragged}>
      <div className="flex flex-col flex-grow relative w-full">
        <div
          className={`bg-primary bg-opacity-70 inset-0 absolute z-10 flex items-center justify-center ${
            isDragged ? "block" : "hidden"
          }`}
        >
          <h2 className="text-2xl font-semibold">Drop Your Files</h2>
        </div>
        <ChannelNav />
        <ChannelConversation />
        <ChannelMessageInput />
      </div>
    </DropZone>
  );
};

export default Chat;

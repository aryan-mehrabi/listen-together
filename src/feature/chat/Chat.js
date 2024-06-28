import React, { useState } from "react";
import ChannelNav from "./ChannelNav";
import ChannelConversation from "./ChannelConversation";
import ChannelMessageInput from "./ChannelMessageInput";
import DropZone from "components/DropZone";
import useMessage from "context/MessageContext";
import { filterImageFiles } from "helpers";
import useMember from "context/MemberContext";
import useChannel from "context/ChannelContext";
import ChannelAddMember from "feature/setting/ChannelAddMember";
import { usePopper } from "react-popper";
import Modal from "components/Modal";

const Chat = ({ loading }) => {
  const [isDragged, setIsDragged] = useState(false);
  const [refElement, setRefElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [showPopover, setShowPopover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement: "bottom",
  });
  const [showAddMemberBanner, setShowAddMemberBanner] = useState(false);
  const { setAttachments } = useMessage();
  const { members } = useMember();
  const { channels, selectedChannel } = useChannel();
  const channelMembers = Object.values(members).filter(
    (membership) => membership.channel_id === selectedChannel
  );

  const channel = channels[selectedChannel];

  const onDropFiles = (files) => {
    const allowedFiles = files.filter(filterImageFiles);
    setAttachments(allowedFiles);
  };

  const createInviteUrl = (url) =>
    `${process.env.REACT_APP_BASE_URL}?invite=${url}`;

  const handleCopy = async () => {
    await window.navigator.clipboard.writeText(
      createInviteUrl(channel.channel_invites[0].url)
    );
    setShowPopover(true);
    setTimeout(() => {
      setShowPopover(false);
    }, 1500);
  };

  const handleShare = async () => {
    await navigator.share({
      url: createInviteUrl(channel.channel_invites[0].url),
    });
  };

  const handleAddMember = () => {
    setIsModalOpen(true);
  };

  return (
    <>
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
          {channelMembers.length === 1 && showAddMemberBanner && !loading && (
            <div className="w-full flex items-center justify-center border-b-[1px] border-neutral-700 py-2 px-4">
              <button
                onClick={handleAddMember}
                className="grow text-cta font-medium"
              >
                Add Members
              </button>
              <button
                type="button"
                className="ml-auto"
                onClick={() => setShowAddMemberBanner(false)}
              >
                <i className="fa-solid fa-close" />
              </button>
            </div>
          )}
          <ChannelConversation />
          <ChannelMessageInput />
        </div>
      </DropZone>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="bg-primary px-6 sm:px-8 py-6 w-80 sm:w-auto max-w-md rounded-lg">
            <div className="mb-6">
              <h2 className="text-2xl  font-semibold">Invite Link</h2>
              <div className="mt-3.5 relative">
                <input
                  readOnly
                  className="text-ellipsis overflow-hidden whitespace-nowrap w-full bg-neutral-700 rounded p-2 pr-14"
                  value={createInviteUrl(channel?.channel_invites[0].url)}
                />
                <div className="absolute flex gap-2 top-0 right-2 h-full">
                  <button
                    ref={setRefElement}
                    onClick={handleCopy}
                    type="button"
                  >
                    <i className="fa-solid fa-copy"></i>
                  </button>
                  {showPopover && (
                    <div
                      ref={setPopperElement}
                      {...attributes.popper}
                      style={styles.popper}
                      className="rounded bg-neutral-800 shadow-md py-1 px-3 relative after:w-0 after:h-0 after:block after:border-transparent after:border-b-neutral-800 after:border-t-0 after:border-r-[6px] after:border-b-4 after:border-l-[6px] after:top-[-4px] after:left-[calc(50%-6px)] after:z-[1px] after:absolute"
                    >
                      Copied
                    </div>
                  )}
                  <button onClick={handleShare} type="button">
                    <i className="fa-solid fa-share-nodes"></i>
                  </button>
                </div>
              </div>
            </div>
            <ChannelAddMember className="my-0" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Chat;

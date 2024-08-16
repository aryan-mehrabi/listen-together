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
import Modal from "components/Modal";
import ChannelInviteLink from "feature/setting/ChannelInviteLink";
import ChannelAddMemberBanner from "./ChannelAddMemberBanner";
import ChannelMusicPlayerBanner from "./ChannelMusicPlayerBanner";

const Chat = ({ loading }) => {
  const [isDragged, setIsDragged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAddMemberBanner, setShowAddMemberBanner] = useState(true);
  const { setAttachments } = useMessage();
  const { members } = useMember();
  const { selectedChannel } = useChannel();
  const channelMembers = Object.values(members).filter(
    (membership) => membership.channel_id === selectedChannel
  );

  const onDropFiles = (files) => {
    const allowedFiles = files.filter(filterImageFiles);
    setAttachments(allowedFiles);
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
          <ChannelMusicPlayerBanner />
          {channelMembers.length === 1 &&
            channelMembers[0].role !== "member" &&
            showAddMemberBanner &&
            !loading && (
              <ChannelAddMemberBanner
                onClick={handleAddMember}
                onClose={() => setShowAddMemberBanner(false)}
              />
            )}
          <ChannelConversation />
          <ChannelMessageInput />
        </div>
      </DropZone>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="bg-primary px-6 sm:px-8 py-6 w-80 sm:w-auto max-w-md rounded-lg">
            <ChannelInviteLink />
            <ChannelAddMember className="my-0" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Chat;

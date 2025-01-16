import React, { useEffect, useState } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import Button from "components/Button";
import useMember from "context/MemberContext";
import Input from "components/Input";
import { BiSolidPencil, BiX } from "react-icons/bi";

const ChannelInfo = ({ role }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { userId } = useAuth();
  const { channels, selectedChannel, setSelectedChannel, updateChannelName } =
    useChannel();
  const { removeMember } = useMember();
  const { setRightSidebar } = useRightSidebar();
  const channel = channels[selectedChannel];
  const [channelName, setChannelName] = useState(channel.name);

  const leaveChannel = async () => {
    await removeMember(userId);
    setSelectedChannel("");
  };

  const handleUpdateChannelName = async () => {
    await updateChannelName(channelName);
    setIsEditMode(false);
  };

  useEffect(() => {
    setIsEditMode(false);
  }, [selectedChannel]);

  // const deleteButton = (
  //   <Button type="danger" className="w-full">
  //     Delete Channel
  //   </Button>
  // );
  const leaveButton = (
    <Button type="danger" onClick={leaveChannel} className="w-full">
      Leave Channel
    </Button>
  );

  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Info</h2>
        <button type="button" onClick={() => setRightSidebar("")}>
          <BiX className="text-3xl" />
        </button>
      </div>
      <div className="mt-3.5">
        <div className="flex gap-2 items-center text-xl my-3">
          {isEditMode ? (
            <div className="w-full flex gap-2">
              <Input
                className="w-full"
                value={channelName}
                setValue={setChannelName}
              />
              <Button
                type="cta"
                className="text-base"
                onClick={handleUpdateChannelName}
              >
                submit
              </Button>
            </div>
          ) : (
            <>
              <p>{channel.name}</p>
              {role !== "member" && (
                <button type="button" onClick={() => setIsEditMode(true)}>
                  <BiSolidPencil className="text-sm text-cta mt-1" />
                </button>
              )}
            </>
          )}
        </div>
        {role === "creator" ? null /* deleteButton */ : leaveButton}
      </div>
    </div>
  );
};

export default ChannelInfo;

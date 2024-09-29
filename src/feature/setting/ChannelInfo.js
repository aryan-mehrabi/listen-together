import React, { useState } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import useRightSidebar from "context/RightSidebarContext";
import Button from "components/Button";
import useMember from "context/MemberContext";
import Input from "components/Input";

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
        <i
          onClick={() => setRightSidebar("")}
          className="fa-solid fa-xmark text-3xl cursor-pointer"
        ></i>
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
                <i
                  onClick={() => setIsEditMode(true)}
                  className="mt-1 fa-solid fa-pen text-xs cursor-pointer text-cta"
                ></i>
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

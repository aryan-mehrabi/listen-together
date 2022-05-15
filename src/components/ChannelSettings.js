import React, { useEffect } from "react";
import useChannel from "../context/ChannelContext";
import useUser from "../context/UserContext";

const ChannelSettings = () => {
  const { selectedChannel } = useChannel();
  const { listenChannelMembers, users } = useUser();

  useEffect(() => {
    listenChannelMembers(selectedChannel);
  }, []);

  const renderMembers = () => {
    return Object.values(users)
      .filter(member => member.channels[selectedChannel])
      .map(({ userId, name, avatar }) => (
        <div key={userId} className="flex items-center my-2.5">
          <img src={avatar} alt="avatar" className="w-12" />
          <p className="text-lg ml-2">{name}</p>
          <i
            title="settings"
            className="fa-solid fa-ellipsis text-xl ml-auto cursor-pointer"
          ></i>
        </div>
      ));
  };

  return (
    <div className="border-l border-neutral-700 w-[37%] min-w-[200px] max-w-sm px-5 py-3 overflow-auto">
      <div className="mt-2">
        <h2 className="text-2xl font-semibold">Info</h2>
        <div className="mt-3.5">
          <p className="text-xl my-3">chatroom 1</p>
          <button className="bg-neutral-800 rounded-sm p-2 w-full text-red-500">
            Delete Channel
          </button>
        </div>
      </div>
      <div className="my-11">
        <h2 className="text-2xl font-semibold">Add a Member</h2>
        <form className="mt-3.5">
          <label htmlFor="">User Email Adress:</label>
          <input
            className="w-full bg-neutral-700 rounded-sm p-1.5 my-2"
            type="text"
            placeholder="E.g. example@example.com"
          />
          <button className="w-full bg-cta text-primary my-1 px-2 py-1.5 rounded-sm">
            Add Member
          </button>
        </form>
      </div>
      <div className="my-11">
        <h2 className="text-2xl font-semibold">Members</h2>
        <div className="mt-3.5">
          {renderMembers()/* <div className="flex items-center my-2.5">
            <img
              src="https://avatars.dicebear.com/api/human/0.023434045249369317.svg"
              alt=""
              className="w-12"
            />
            <p className="text-lg ml-2">name</p>
            <i
              title="settings"
              className="fa-solid fa-ellipsis text-xl ml-auto cursor-pointer"
            ></i>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ChannelSettings;

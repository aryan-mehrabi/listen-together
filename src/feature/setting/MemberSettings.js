import React, { useState } from "react";
import useAuth from "context/AuthContext";
import DropDown from "components/DropDown";
import Button from "components/Button";
import useMember from "context/MemberContext";
import useChannel from "context/ChannelContext";

const MemberSettings = ({ userId }) => {
  const [dropdown, setDropdown] = useState(false);
  const [element, setElement] = useState(null);
  const { userId: authUserId } = useAuth();
  const { members, changeRole, removeMember } = useMember();
  const { selectedChannel } = useChannel();

  const { role: userRole } =
    Object.values(members).find(
      (member) =>
        member.user_id === userId && member.channel_id === selectedChannel
    ) || {};
  const { role: authUserRole } =
    Object.values(members).find(
      (member) =>
        member.user_id === authUserId && member.channel_id === selectedChannel
    ) || {};

  const rolesRules = { creator: 3, admin: 2, member: 1 };

  const handleChangeRole = (role) => {
    changeRole(userId, role);
    setDropdown(false);
  };

  const handleRemoveMember = () => {
    removeMember(userId);
    setDropdown(false);
  };

  const promoteButton = (
    <Button
      type="primary"
      key="1"
      onClick={() => handleChangeRole("admin")}
      className="w-full border-t rounded-none"
    >
      Promote to Admin
    </Button>
  );
  const demoteButton = (
    <Button
      type="primary"
      key="2"
      onClick={() => handleChangeRole("member")}
      className="w-full border-t rounded-none"
    >
      Demote to Member
    </Button>
  );
  const removeButton = (
    <Button
      type="primary"
      key="3"
      onClick={handleRemoveMember}
      className="w-full rounded-none"
    >
      Remove from Channel
    </Button>
  );

  const renderedButtons = (() => {
    const buttons = [];
    if (rolesRules[authUserRole] > rolesRules[userRole]) {
      buttons.push(removeButton);
    }
    if (authUserRole === "creator") {
      if (userRole === "admin") {
        buttons.push(demoteButton);
      } else if (userRole === "member") {
        buttons.push(promoteButton);
      }
    }
    return buttons;
  })();

  if (!renderedButtons.length) {
    return null;
  }

  return (
    <div className=" ml-auto cursor-pointer relative" ref={setElement}>
      <div onClick={() => setDropdown(!dropdown)}>
        <i title="settings" className="fa-solid fa-ellipsis text-xl"></i>
      </div>
      <DropDown {...{ dropdown, setDropdown }} dropdownRef={element}>
        {renderedButtons}
      </DropDown>
    </div>
  );
};

export default MemberSettings;

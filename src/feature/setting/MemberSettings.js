import React, { useState, useRef } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import DropDown from "components/DropDown";
import Button from "components/Button";
import useMember from "context/MemberContext";

const MemberSettings = ({ userId }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const { removeMember } = useChannel();
  const { userId: authUserId } = useAuth();
  const { members, changeRole } = useMember();

  const { role: userRole } = Object.values(members).find(
    member => member.user_id === userId
  );
  const { role: authUserRole } = Object.values(members).find(
    member => member.user_id === authUserId
  );

  const rolesRules = { creator: 3, admin: 2, member: 1 };

  const promoteButton = (
    <Button
      type="primary"
      key="1"
      onClick={() => changeRole(userId, "admin")}
      className="w-full border-t"
    >
      Promote to Admin
    </Button>
  );
  const demoteButton = (
    <Button
      type="primary"
      key="2"
      onClick={() => changeRole(userId, "member")}
      className="w-full border-t"
    >
      Demote to Member
    </Button>
  );
  const removeButton = (
    <Button
      type="primary"
      key="3"
      onClick={() => removeMember(userId)}
      className="w-full"
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
    <div className=" ml-auto cursor-pointer relative" ref={dropdownRef}>
      <div onClick={() => setDropdown(!dropdown)}>
        <i title="settings" className="fa-solid fa-ellipsis text-xl"></i>
      </div>
      <DropDown {...{ dropdown, setDropdown, dropdownRef }}>
        {renderedButtons}
      </DropDown>
    </div>
  );
};

export default MemberSettings;

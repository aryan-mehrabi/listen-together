import React, { useState, useRef } from "react";
import useAuth from "context/AuthContext";
import useChannel from "context/ChannelContext";
import DropDown from "components/DropDown";

const MemberSettings = ({ userId }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const { selectedChannel, channels, removeMember, changeRole } = useChannel();
  const { userId: authUserId } = useAuth();

  const userRole = channels[selectedChannel].roles[userId];
  const authUserRole = channels[selectedChannel].roles[authUserId];

  const rolesRules = { creator: 3, admin: 2, member: 1 };

  const promoteButton = (
    <button
      key="1"
      onClick={() => changeRole(userId, "admin")}
      className="p-3 w-full border-t border-neutral-500"
    >
      Promote to Admin
    </button>
  );
  const demoteButton = (
    <button
      key="2"
      onClick={() => changeRole(userId, "member")}
      className="p-3 w-full border-t border-neutral-500"
    >
      Demote to Member
    </button>
  );
  const removeButton = (
    <button
      key="3"
      onClick={() => removeMember(userId)}
      className="p-3 w-full"
    >
      Remove from Channel
    </button>
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

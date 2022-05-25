import React, { useState, useRef } from "react";
import useAuth from "../context/AuthContext";
import useChannel from "../context/ChannelContext";
import DropDown from "./DropDown";

const MembersSetting = ({ userId }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const { selectedChannel, channels } = useChannel();
  const { userId: authUserId } = useAuth();

  const userRole = channels[selectedChannel].roles[userId];
  const authUserRole = channels[selectedChannel].roles[authUserId];

  const rolesRules = { creator: 3, admin: 2, member: 1 };

  const promoteButton = (
    <button className="py-3 w-full border-b border-neutral-500">Promote</button>
  );
  const demoteButton = (
    <button className="py-3 w-full border-b border-neutral-500">Demote</button>
  );
  const removeButton = <button className="py-3 w-full">Remove</button>;

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

export default MembersSetting;

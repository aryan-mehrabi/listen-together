import React, { useState, useRef } from "react";
import DropDown from "./DropDown";

const MembersSetting = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();

  const removeButton = <button className="py-2 w-full">remove member</button>;
  const promoteButton = <button className="py-2 w-full">promote member</button>;
  const demoteButton = <button className="py-2 w-full">demote member</button>;

  return (
    <div className=" ml-auto cursor-pointer relative" ref={dropdownRef}>
      <div onClick={() => setDropdown(!dropdown)}>
        <i title="settings" className="fa-solid fa-ellipsis text-xl"></i>
      </div>
      <DropDown {...{ dropdown, setDropdown, dropdownRef }}>
        {promoteButton}
        {demoteButton}
        {removeButton}
      </DropDown>
    </div>
  );
};

export default MembersSetting;

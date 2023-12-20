import Button from "components/Button";
import DropDown from "components/DropDown";
import useAuth from "context/AuthContext";
import useMessage from "context/MessageContext";
import React, { useState, useRef } from "react";

const ChannelMessageMore = ({ message: { id, user_id } }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const { userId } = useAuth();
  const { setReply } = useMessage();

  const onClickReply = () => {
    setReply(id);
    setDropdown(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer p-1"
        onClick={() => setDropdown((val) => !val)}
      >
        <i className="fa-solid fa-ellipsis"></i>
      </div>
      <DropDown
        className={userId !== user_id ? "left-0" : ""}
        {...{ dropdown, setDropdown, dropdownRef }}
      >
        <Button className="w-full" onClick={onClickReply}>
          Reply
        </Button>
      </DropDown>
    </div>
  );
};

export default ChannelMessageMore;

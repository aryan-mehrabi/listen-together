import Button from "components/Button";
import DropDown from "components/DropDown";
import useAuth from "context/AuthContext";
import useMessage from "context/MessageContext";
import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const ChannelMessageMore = ({ message: { id, user_id } }) => {
  const [dropdown, setDropdown] = useState(false);
  const [element, setElement] = useState(null);
  const { userId } = useAuth();
  const { setReply, messageInputRef } = useMessage();

  const onClickReply = () => {
    setReply(id);
    setDropdown(false);
    messageInputRef.current.focus();
  };

  return (
    <div className="relative" ref={setElement}>
      <div
        className="cursor-pointer p-1 text-lg"
        onClick={() => setDropdown((val) => !val)}
      >
        <BiDotsHorizontalRounded />
      </div>
      <DropDown
        position={userId === user_id ? "bottom-end" : "bottom-start"}
        {...{ dropdown, setDropdown }}
        dropdownRef={element}
      >
        <Button className="w-full" onClick={onClickReply}>
          Reply
        </Button>
      </DropDown>
    </div>
  );
};

export default ChannelMessageMore;

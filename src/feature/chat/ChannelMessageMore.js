import Button from "components/Button";
import DropDown from "components/DropDown";
import useAuth from "context/AuthContext";
import useMessage from "context/MessageContext";
import React, { useState } from "react";

const ChannelMessageMore = ({ message: { id, user_id } }) => {
  const [dropdown, setDropdown] = useState(false);
  const [element, setElement] = useState(null);
  const { userId } = useAuth();
  const { setReply } = useMessage();

  const onClickReply = () => {
    setReply(id);
    setDropdown(false);
  };

  return (
    <div className="relative" ref={setElement}>
      <div
        className="cursor-pointer p-1"
        onClick={() => setDropdown((val) => !val)}
      >
        <i className="fa-solid fa-ellipsis"></i>
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

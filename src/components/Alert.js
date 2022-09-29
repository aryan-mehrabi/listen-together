import React from "react";
import useModal from "context/ModalContext";
import Button from "./Button";

const Alert = ({ children }) => {
  const { setModal } = useModal();

  return (
    <div className="bg-primary px-10 py-7 max-w-sm shadow-xl">
      <p>{children}</p>
      <Button
        type="secondary"
        className="block ml-auto px-8 mt-8"
        onClick={() => setModal(null)}
      >
        OK
      </Button>
    </div>
  );
};

export default Alert;

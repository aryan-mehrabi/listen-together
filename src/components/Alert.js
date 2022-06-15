import React from "react";
import useModal from "../context/ModalContext";

const Alert = ({ children }) => {
  const { setModal } = useModal();

  return (
    <div className="bg-primary px-10 py-7 max-w-sm shadow-xl">
      <p>{children}</p>
      <button
        className="bg-secondary text-primary px-8 py-2 mt-8 rounded-sm ml-auto block"
        onClick={() => setModal(null)}
      >
        OK
      </button>
    </div>
  );
};

export default Alert;

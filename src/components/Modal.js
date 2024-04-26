import React from "react";
import ReactDOM from "react-dom";
import useModal from "context/ModalContext";
import Button from "./Button";

const Modal = ({ children }) => {
  const { setModal } = useModal();

  return ReactDOM.createPortal(
    <div
      onClick={() => setModal(null)}
      className="absolute inset-0 overflow-auto bg-neutral-800 bg-opacity-90 text-secondary flex items-center justify-center"
    >
      <Button
        type="primary"
        className="fixed top-3 right-3 flex items-center justify-center w-9 h-9 bg-black bg-opacity-60"
      >
        <i className="fa-solid fa-xmark text-xl"></i>
      </Button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full"
      >
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

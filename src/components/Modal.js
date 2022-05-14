import React from "react";
import ReactDOM from "react-dom";
import useModal from "../context/ModalContext";

const Modal = ({ children }) => {
  const { setModal } = useModal();

  return ReactDOM.createPortal(
    <div
      onClick={() => setModal(null)}
      className="absolute inset-0 bg-neutral-700 bg-opacity-50 text-secondary flex items-center justify-center"
    >
      <div className="absolute top-3 right-6 cursor-pointer">
        <i className="fa-solid fa-xmark text-4xl"></i>
      </div>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

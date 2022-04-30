import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => closeModal(false)}
      className="absolute inset-0 bg-neutral-700 bg-opacity-50 text-secondary flex items-center justify-center"
    >
      <div className="absolute top-0 right-0">
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

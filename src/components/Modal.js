import React from "react";
import ReactDOM from "react-dom";
import useModal from "context/ModalContext";

const Modal = ({ children }) => {
  const { setModal } = useModal();

  return ReactDOM.createPortal(
    <div
      onClick={() => setModal(null)}
      className="absolute inset-0 overflow-auto bg-neutral-700 bg-opacity-50 text-secondary flex items-center justify-center"
    >
      <div className="fixed top-3 right-9 cursor-pointer">
        <i className="fa-solid fa-xmark text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)]"></i>
      </div>
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

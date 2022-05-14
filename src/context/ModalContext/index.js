import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const value = {
    modal,
    setModal
  }
  return (
    <ModalContext.Provider {...{ value }}>{children}</ModalContext.Provider>
  );
};

const useModal = () => {

  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error("useModal should be use within its provider");
  }

  return context;
}
export default useModal;